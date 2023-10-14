import Stars from "./Stars"


export default function Food(props: {
    name: string,
    stars: number,
    ratings: number
}) {
    const { name, stars, ratings } = props

    return (
        <div className="break-inside-avoid-column flex flex-col bg-slate-200 w-72 rounded-lg p-4">
            <h3 className="text-2xl font-bold">
                {name}
            </h3>
            <div className="flex gap-2 mb-3 text-slate-500 font-bold items-center">
                <p className="">
                    <Stars num={stars} />
                </p>
                <p>•</p>
                <p className="">
                    {ratings} {ratings == 1 ? "rating" : "ratings"}
                </p>
            </div>
        </div>
    )
}
