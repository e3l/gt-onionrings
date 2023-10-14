import { StationType } from "@/util/types";
import Checkbox from "./Checkbox";


export default function StationsSidebar(props: {
    stations: StationType[],
    setStations: (x: StationType[]) => void,
}) {
    const { stations, setStations } = props;

    return (
        <div className="absolute left-4 top-0 sticky w-min h-screen">
            <div className="bg-slate-200 p-4 mt-24 rounded-lg">
                <h3 className="text-lg font-bold mb-1">
                    Choose stations
                </h3>
                <button
                    onClick={() => {
                        let switchOn = false;
                        for (const s of stations) {
                            if (!s.checked) {
                                switchOn = true;
                                break;
                            }
                        }
                        for (const s of stations) {
                            s.checked = switchOn;
                        }
                        setStations([...stations]);
                    }}
                    className="text-xs text-white uppercase font-bold bg-slate-400 hover:bg-slate-500 transition duration-150 p-2 rounded-lg mb-2"
                >
                    Toggle all
                </button>
                <div className="flex flex-col">
                    {stations.map((s, i) =>
                        <Checkbox
                            key={i}
                            label={s.name}
                            on={s.checked}
                            setOn={(x: boolean) => {
                                stations[i].checked = x;
                                setStations([...stations]);
                            }}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
