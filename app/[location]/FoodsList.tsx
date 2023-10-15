import { FoodType } from "@/util/types";
import Food from "./FoodTile";
import ListFood from "./ListFood";
import { useEffect, useState } from "react";


export default function FoodsList(props: {
    foods: FoodType[],
    tileView: boolean,
    sortMode: string,
}) {
    const { foods, tileView, sortMode } = props;
    const [sortedFoods, setSortedFoods] = useState(foods);

    useEffect(() => {
        if (sortMode === "Highest rated") {
            sortedFoods.sort(function(a, b) { 
                return b.stars - a.stars;
            })
        } else if (sortMode === "Lowest rated") {
            sortedFoods.sort(function(a, b) { 
                return a.stars - b.stars;
            })
        } else {
            sortedFoods.sort(function(a, b) { 
                if (a.name > b.name) {
                    return 1;
                } else {
                    return -1;
                }
            })
        }
        setSortedFoods([...sortedFoods]);
    }, [sortMode]);

    return <>
        {sortedFoods.length > 0 ? (tileView ? <div className="gap-2 columns-1 lg:columns-2 xl:columns-3 space-y-2">
            {sortedFoods.map((f: any, i: number) =>
                <Food key={i} food={f} />
            )}
        </div> : <div className="flex flex-col gap-2">
            {sortedFoods.map((f: any, i: number) =>
                <ListFood key={i} food={f} />
            )}
        </div>) : <p className="italic">
            Nothing on the menu for your chosen stations.
        </p>}
    </>
}
