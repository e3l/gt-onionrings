import { LOCATIONS } from "@/util/types";
import Location from "./Location";


export default function Home() {
    return (
        <div className="container mt-12">
            <h1 className="text-center text-7xl font-bold mb-12">
                GT Onion Rings
            </h1>
            <div className="max-w-[1200px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 m-auto">
                {LOCATIONS.map((l, i) =>
                    <Location key={i} location={l} />
                )}
            </div>
        </div>
    )
}
