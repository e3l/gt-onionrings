export default function ChooseMealSidebar(props: {
    chosenMeal: string,
    setChosenMeal: (x: string) => void,
}) {
    const { chosenMeal, setChosenMeal } = props;
    
    return (
        <div className="flex flex-col bg-slate-200 mt-6 w-full whitespace-nowrap rounded-lg">
            <button
                onClick={() => setChosenMeal("Breakfast")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (chosenMeal === "Breakfast" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Breakfast
            </button>
            <button
                onClick={() => setChosenMeal("Lunch")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (chosenMeal === "Lunch" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Lunch
            </button>
            <button
                onClick={() => setChosenMeal("Dinner")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (chosenMeal === "Dinner" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Dinner
            </button>
        </div>
    )
}
