import { FoodType } from "@/util/types";
import Food from "./Food";


export default function FoodsList(props: {
    foods: FoodType[],
}) {
    const { foods } = props;

    return <>
        {foods.length > 0 ? <div className="columns-1 lg:columns-2 xl:columns-3 space-y-4">
            {foods.map((x: any, i: number) =>
                <Food key={i} name={x.name} stars={3.5} ratings={3} />
            )}
        </div> : <p className="italic">
            Nothing on the menu for your chosen stations.
        </p>}
    </>
}
