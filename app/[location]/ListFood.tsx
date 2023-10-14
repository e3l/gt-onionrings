import Stars from "./Stars"


export default function ListFood(props: {
    name: string,
    station: string,
    stars: number,
    ratings: number,
}) {
    const { name, station, stars, ratings } = props

    return (
        <div className="flex bg-slate-200 rounded-lg px-3 pt-1 pb-1.5">
            <div className="flex flex-col grow pr-4">
                <h1 className="text-xl font-bold">
                    {name}
                </h1>
                <h3 className="text-xs uppercase font-bold text-slate-500/80">
                    {station}
                </h3>
            </div>
            <div className="flex gap-2 text-slate-500 font-bold items-center whitespace-nowrap">
                <p className="text-sm">
                    {ratings} {ratings == 1 ? "rating" : "ratings"}
                </p>
                <p>•</p>
                <Stars num={stars} />
            </div>
        </div>
    )
}
