'use client'
import { useEffect, useState } from "react";
import { FoodType, StationType } from "@/util/types";
import StationsSidebar from "./StationsSidebar";
import FoodsList from "./FoodsList";


export default function Page({ params }: { params: { location: string } }) {
    const [stations, setStations] = useState<StationType[]>([]);
    const [foods, setFoods] = useState<FoodType[]>([]);

    useEffect(() => {
        const { location, meal, year, month, day } = {
            location: "west-village",
            meal: "lunch",
            year: "2023",
            month: "10",
            day: "14",
        }
        fetch(`http://localhost:3000/api/foods/${location}/${meal}/${year}/${month}/${day}`, { cache: "no-store" })
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
        <div className="flex text-slate-600">
            <StationsSidebar stations={stations} setStations={setStations} />
            <div className="container mt-12 flex flex-col items-center pb-6">
                <h1 className="text-5xl font-bold mb-6">
                    {params.location}
                </h1>
                <FoodsList foods={foods} />
            </div>
        </div>
    )
}
