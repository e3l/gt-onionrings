import { FoodType } from "@/util/types";
import Food from "./Food";


export default function FoodsList(props: {
    foods: FoodType[],
}) {
    const { foods } = props;

    return <>
        {foods.length > 0 ? <div className="gap-2 columns-1 lg:columns-2 xl:columns-3 space-y-2">
            {foods.map((f: any, i: number) =>
                <Food key={i} name={f.name} station={f.station} stars={3.5} ratings={3} />
            )}
        </div> : <p className="italic">
            Nothing on the menu for your chosen stations.
        </p>}
    </>
}
