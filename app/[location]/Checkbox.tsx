export default function Checkbox(props: {
    label: string,
    on: boolean,
    setOn: (x: boolean) => void, 
}) {
    const { label, on, setOn } = props;

    return (
        <button className="flex gap-2 items-center w-full bg-slate-200/0 hover:bg-slate-200 transition duration-150" onClick={() => setOn(!on)}>
            <div className={"border-2 border-white ring-2 ring-slate-500 w-4 h-4 transition duration-150 "
                    + (on ? "bg-green-400" : "bg-white")} />
            {label}
        </button>
    )
}
