import { MdDashboard, MdViewStream } from "react-icons/md";


export default function ViewModeSidebar(props: {
    tileView: boolean,
    setTileView: (x: boolean) => void,
}) {
    const { tileView, setTileView } = props;

    return (
        <div className="flex flex-col bg-slate-200 mt-36 w-min whitespace-nowrap rounded-lg">
            <button
                onClick={() => setTileView(false)}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 "
                    + (tileView ? "bg-slate-300/0 hover:bg-slate-300" : "bg-emerald-300")}
            >
                <MdViewStream size={20} />
                <p className="text-sm uppercase font-bold">
                    List view
                </p>
            </button>
            <button
                onClick={() => setTileView(true)}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 "
                    + (tileView ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                <MdDashboard size={20} />
                <p className="text-sm uppercase font-bold">
                    Tile view
                </p>
            </button>
        </div>
    )
}
