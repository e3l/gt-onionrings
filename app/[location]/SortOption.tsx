export default function SortOption(props: {
    mode: string,
    setMode: (x: string) => void,
}) {
    const { mode, setMode } = props;

    return (
        <div className="flex flex-col bg-slate-200 mt-6 w-full whitespace-nowrap rounded-lg">
            <button
                onClick={() => setMode("Highest rated")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (mode === "Highest rated" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Highest rated
            </button>
            <button
                onClick={() => setMode("Lowest rated")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (mode === "Lowest rated" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Lowest rated
            </button>
            <button
                onClick={() => setMode("Alphabetical")}
                className={"flex gap-1 items-center p-1 pr-2 rounded-lg transition duration-150 text-sm uppercase font-bold "
                    + (mode === "Alphabetical" ? "bg-emerald-300" : "bg-slate-300/0 hover:bg-slate-300")}
            >
                Alphabetical
            </button>
        </div>
    )
}
