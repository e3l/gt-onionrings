import { BsHexagonFill, BsHexagonHalf, BsHexagon } from "react-icons/bs";


export default function Stars(props: {
    num: number,
}) {
    const { num } = props;
    const rounded = Math.round(2 * num) / 2;
    const numFull = Math.floor(rounded);
    const half = rounded > numFull;
    const numEmpty = 5 - numFull - (half ? 1 : 0);

    return (
        <div className="flex gap-0.5 text-amber-400">
            {[...Array(numFull)].map((_, i) => <BsHexagonFill key={i} />)}
            {half && <BsHexagonHalf />}
            {[...Array(numEmpty)].map((_, i) => <BsHexagon key={i} />)}
        </div>
    )
}
