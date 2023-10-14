import Food from "./Food";


export default function Page({ params }: { params: { location: string } }) {
    return (
        <div className="container mt-12 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-6">
                {params.location}
            </h1>
            <div className="columns-3 space-y-4">
                <Food name="Chicken" stars={3} ratings={3} />
                <Food name="Rice" stars={0.5} ratings={10800} />
                <Food name="Pizzer" stars={3.4} ratings={3} />
                <Food name="Bunger" stars={3.2} ratings={3} />
                <Food name="Onion Rings" stars={5} ratings={705} />
            </div>
        </div>
    )
}
