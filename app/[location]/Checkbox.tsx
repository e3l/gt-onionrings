export default function Checkbox(props: {
    label: string,
    on: boolean,
    setOn: (x: boolean) => void, 
}) {
    const { label, on, setOn } = props;

    return (
        <button className="py-0.5 px-2 rounded-md text-sm font-semibold flex gap-2 items-center w-full bg-slate-300/0 hover:bg-slate-300 transition duration-150" onClick={() => setOn(!on)}>
            <div className={"border-2 border-white ring-2 ring-slate-500 w-4 h-4 transition duration-150 "
                    + (on ? "bg-emerald-300" : "bg-white")} />
            {label}
        </button>
    )
}
