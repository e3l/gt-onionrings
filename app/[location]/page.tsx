'use client'
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { AllFoodsType, DEFAULT_ALL_FOODS, DEFAULT_LOCATION, FoodType, LOCATIONS, LocationType, StationType } from "@/util/types";
import StationsSidebar from "./StationsSidebar";
import FoodsList from "./FoodsList";
import ViewModeSidebar from "./ViewModeSidebar";
import ChooseMealSidebar from "./ChooseMealSidebar";


export default function Page({ params }: { params: { location: string } }) {
    const [loading, setLoading] = useState(true);
    const [locationObj, setLocationObj] = useState<LocationType>(DEFAULT_LOCATION);
    const [allFoods, setAllFoods] = useState<AllFoodsType>(DEFAULT_ALL_FOODS);
    const [stations, setStations] = useState<StationType[]>([]);
    const [foods, setFoods] = useState<FoodType[]>([]);
    const [tileView, setTileView] = useState(false);
    const [chosenMeal, setChosenMeal] = useState("Breakfast");

    useEffect(() => {
        const loc = LOCATIONS.find(l => l.slug === params.location);
        if (!loc) {
            return;
        }
        setLocationObj(loc);

        const location = loc.nutrisliceSlug;
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();

        let meal = "";
        const currentMinutes = new Date().getHours() * 60 + new Date().getMinutes();
        if (currentMinutes < 11 * 60) {
            setChosenMeal("Breakfast");
            meal = "Breakfast";
        } else if (currentMinutes < 4 * 60) {
            setChosenMeal("Lunch");
            meal = "Lunch";
        } else {
            setChosenMeal("Dinner");
            meal = "Dinner";
        }

        fetch(`http://localhost:3000/api/foods/${location}/${year}/${month}/${day}`, { cache: "no-store" })
            .then(res => res.json())
            .then(data => {
                setAllFoods(data.allFoods);
                const foodsArr: FoodType[] = [];
                let chosenStations;

                if (meal === "Breakfast") {
                    chosenStations = data.allFoods.breakfast;
                } else if (meal === "Lunch") {
                    chosenStations = data.allFoods.lunch;
                } else {
                    chosenStations = data.allFoods.dinner;
                }

                setStations(chosenStations);
                chosenStations.forEach((s: StationType) => {
                    if (s.checked) {
                        foodsArr.push(...s.foods);
                    }
                });
                setFoods(foodsArr);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        let newStations;
        if (chosenMeal === "Breakfast") {
            newStations = allFoods.breakfast;
        } else if (chosenMeal === "Lunch") {
            newStations = allFoods.lunch;
        } else {
            newStations = allFoods.dinner;
        }
        const foodsArr: FoodType[] = [];
        newStations.forEach((s: StationType) => {
            if (s.checked) {
                foodsArr.push(...s.foods);
            }
        });
        if (chosenMeal === "Breakfast") {
            allFoods.breakfast = newStations;
        } else if (chosenMeal === "Lunch") {
            allFoods.lunch = newStations;
        } else {
            allFoods.dinner = newStations;
        }
        setFoods(foodsArr);
        setStations(newStations);
        setAllFoods({...allFoods});
    }, [stations, chosenMeal])

    return (
        <div className="container relative flex text-slate-600">
            <StationsSidebar stations={stations} setStations={setStations} />
            <div className="container mt-12 flex flex-col items-center pb-6 mx-4">
                <h1 className="text-5xl font-bold mb-6">
                    {locationObj.name}
                </h1>
                <a
                    href={"/"}
                    className="flex gap-2 items-center text-lg font-bold px-3 py-2 mb-6 bg-slate-200 hover:bg-slate-300 transition duration-150 rounded-lg"
                >
                    <BsArrowLeft size={24} />
                    Back to all locations
                </a>
                {loading ? <p className="italic">
                    loading...
                </p> : <FoodsList foods={foods} tileView={tileView} />}
            </div>
            <div className="absolute right-4 top-0 sticky h-screen text-slate-500">
                <ViewModeSidebar tileView={tileView} setTileView={setTileView} />
                <ChooseMealSidebar chosenMeal={chosenMeal} setChosenMeal={setChosenMeal} />
            </div>
        </div>
    )
}
