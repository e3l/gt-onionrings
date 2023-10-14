import { StationType } from "@/util/types";


export async function GET(_: Request, { params }: { params: {
    location: string,
    meal: string,
    year: string,
    month: string,
    day: string,
} }) {
    const { location, meal, year, month, day } = params;
    const res = await fetch(`https://techdining.api.nutrislice.com/menu/api/weeks/school/${location}/menu-type/${meal}/${year}/${month}/${day}/`, { cache: "no-store" });
    const data = await res.json();

    const stations: StationType[] = [];
    let currStation: StationType = {
        name: "",
        checked: true,
        foods: [],
    }
    data.days[new Date().getDay()].menu_items.forEach((x: any) => {
        if (x.text !== "") {
            if (currStation.name) {
                stations.push(currStation);
                currStation = {
                    name: "",
                    checked: true,
                    foods: [],
                }
            }
            currStation.name = x.text;
        }
        if ("food" in x && x.food !== null && "name" in x.food) {
            currStation.foods.push({
                name: x.food.name,
                station: currStation.name,
            })
        }
    });
    if (currStation.name) {
        stations.push(currStation);
    }

    return Response.json({ stations })
}
