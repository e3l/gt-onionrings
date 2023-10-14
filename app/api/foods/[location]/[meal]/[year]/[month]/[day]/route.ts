import { FoodType } from "@/util/types";

export async function GET(_: Request, { params }: { params: {
    location: string,
    meal: string,
    year: string,
    month: string,
    day: string,
} }) {
    const { location, meal, year, month, day } = params;
    const res = await fetch(`https://techdining.api.nutrislice.com/menu/api/weeks/school/${location}/menu-type/${meal}/${year}/${month}/${day}/`, { cache: "no-store" });
    const data = await res.json()
    console.log(data)

    const foods: FoodType[] = []
    data.days[new Date().getDay()].menu_items.forEach((x: any) => {
        console.log(x)
        if ("food" in x && x.food !== null && "name" in x.food) {
            foods.push({
                name: x.food.name,
            })
        }
    });

    return Response.json({ foods })
}
