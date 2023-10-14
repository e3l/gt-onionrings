import { FoodType } from "@/util/types";
import Food from "./FoodTile";
import ListFood from "./ListFood";


export default function FoodsList(props: {
    foods: FoodType[],
    tileView: boolean,
}) {
    const { foods, tileView } = props;

    return <>
        {foods.length > 0 ? (tileView ? <div className="gap-2 columns-1 lg:columns-2 xl:columns-3 space-y-2">
            {foods.map((f: any, i: number) =>
                <Food key={i} name={f.name} station={f.station} stars={3.5} ratings={3} />
            )}
        </div> : <div className="flex flex-col gap-2">
            {foods.map((f: any, i: number) =>
                <ListFood key={i} name={f.name} station={f.station} stars={3.5} ratings={3} />
            )}
        </div>) : <p className="italic">
            Nothing on the menu for your chosen stations.
        </p>}
    </>
}
