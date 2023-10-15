import { AllFoodsType, StationType } from "@/util/types";


export async function GET(_: Request, { params }: { params: {
    location: string,
    year: string,
    month: string,
    day: string,
} }) {
    const { location, year, month, day } = params;
    const breakfast = await fetch(`https://techdining.api.nutrislice.com/menu/api/weeks/school/${location}/menu-type/breakfast/${year}/${month}/${day}/`, { cache: "no-store" });
    const lunch = await fetch(`https://techdining.api.nutrislice.com/menu/api/weeks/school/${location}/menu-type/lunch/${year}/${month}/${day}/`, { cache: "no-store" });
    const dinner = await fetch(`https://techdining.api.nutrislice.com/menu/api/weeks/school/${location}/menu-type/dinner/${year}/${month}/${day}/`, { cache: "no-store" });
    const breakfastData = await breakfast.json();
    const lunchData = await lunch.json();
    const dinnerData = await dinner.json();

    const allFoods: AllFoodsType = {
        breakfast: [],
        lunch: [],
        dinner: [],
    };
    ["Breakfast", "Lunch", "Dinner"].map(meal => {
        const toAdd: StationType[] = [];
        let currStation: StationType = {
            name: "",
            checked: true,
            foods: [],
        }
        let toIter;
        if (meal === "Breakfast") {
            toIter = breakfastData;
        } else if (meal === "Lunch") {
            toIter = lunchData;
        } else {
            toIter = dinnerData;
        }
        toIter.days[new Date().getDay()].menu_items.forEach((x: any) => {
            if (x.text !== "") {
                if (currStation.name) {
                    toAdd.push(currStation);
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
                    stars: Math.random() * 5,
                    ratings: Math.floor(Math.random() * 100),
                })
            }
        });
        if (currStation.name) {
            toAdd.push(currStation);
            currStation = {
                name: "",
                checked: true,
                foods: [],
            }
        }
        if (meal === "Breakfast") {
            allFoods.breakfast = toAdd;
        } else if (meal === "Lunch") {
            allFoods.lunch = toAdd;
        } else {
            allFoods.dinner = toAdd;
        }
    })

    return Response.json({ allFoods })
}
