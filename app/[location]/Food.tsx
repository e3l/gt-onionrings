import Stars from "./Stars"


export default function Food(props: {
    name: string,
    station: string,
    stars: number,
    ratings: number
}) {
    const { name, station, stars, ratings } = props

    return (
        <div className="break-inside-avoid-column flex flex-col bg-slate-200 w-72 rounded-lg px-3 py-2">
            <h1 className="text-xl font-bold">
                {name}
            </h1>
            <h3 className="text-xs uppercase font-bold text-slate-500/80 mb-2">
                {station}
            </h3>
            <div className="flex gap-2 text-slate-500 font-bold items-center">
                <Stars num={stars} />
                <p>•</p>
                <p className="">
                    {ratings} {ratings == 1 ? "rating" : "ratings"}
                </p>
            </div>
        </div>
    )
}
