import Food from "./Food";


async function getFoods(
    location: string,
    meal: string,
    year: string,
    month: string,
    day: string,
) {
    const res = await fetch(`http://localhost:3000/api/foods/${location}/${meal}/${year}/${month}/${day}`, { cache: "no-store" });
    const { foods } = await res.json();
    return foods;
}

export default async function Page({ params }: { params: { location: string } }) {
    const foods = await getFoods("west-village", "lunch", "2023", "10", "14");

    return (
        <div className="container mt-12 flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-6">
                {params.location}
            </h1>
            <div className="columns-3 space-y-4">
                {foods.map((x: any, i: number) =>
                    <Food key={i} name={x.name} stars={3.5} ratings={3} />
                )}
            </div>
        </div>
    )
}
