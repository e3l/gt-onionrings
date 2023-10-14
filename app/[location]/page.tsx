'use client'
import { useEffect, useState } from "react";
import { FoodType, LOCATIONS, StationType } from "@/util/types";
import StationsSidebar from "./StationsSidebar";
import FoodsList from "./FoodsList";
import ViewModeSidebar from "./ViewModeSidebar";


export default function Page({ params }: { params: { location: string } }) {
    const { location } = params;

    const [stations, setStations] = useState<StationType[]>([]);
    const [foods, setFoods] = useState<FoodType[]>([]);
    const [tileView, setTileView] = useState(false);

    useEffect(() => {
        const locationObj = LOCATIONS.find(l => l.slug === location);

        const loc = locationObj?.nutrisliceSlug;
        const meal = "lunch";
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const day = new Date().getDate();

        fetch(`http://localhost:3000/api/foods/${loc}/${meal}/${year}/${month}/${day}`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => {
                setStations(data.stations);
            })
    }, []);

    useEffect(() => {
        const foodsArr: FoodType[] = [];
        stations.forEach((s: StationType) => {
            if (s.checked) {
                foodsArr.push(...s.foods);
            }
        });
        setFoods(foodsArr);
    }, [stations])

    return (
        <div className="container relative flex text-slate-600">
            <StationsSidebar stations={stations} setStations={setStations} />
            <div className="container mt-12 flex flex-col items-center pb-6 mx-4">
                <h1 className="text-5xl font-bold mb-6">
                    {params.location}
                </h1>
                <FoodsList foods={foods} tileView={tileView} />
            </div>
            <ViewModeSidebar tileView={tileView} setTileView={setTileView} />
        </div>
    )
}
