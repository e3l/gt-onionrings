import { LocationType } from "@/util/types";


export default function Location(props: {
    location: LocationType,
}) {
    const { name, slug, image } = props.location;

    return (
        <a href={slug}>
            <div className="hover:opacity-70 relative aspect-square object-contain">
                <img src={image} className="object-cover w-full h-full rounded-lg" />
                <div className="absolute w-full h-full top-0">
                    <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t
                            from-gray-500 to-white-500 flex justify-items-end items-end py-2 ps-2 rounded-lg">
                        <h3 className="text-2xl font-bold text-white w-full">
                            {name}
                        </h3>
                    </div>
                </div>
            </div>
        </a>
    )
}
