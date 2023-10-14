import Location from "./Location";

export default function Home() {
    return (
        <div className="container mt-12">
            <h1 className="text-center text-7xl font-bold">
                ONION RINGS
            </h1>
            <div className = "max-w-[1200px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 m-auto">
                <Location name = "Willage" img = "https://nique.net/wp-content/uploads/2017/09/westvillage-color.jpg" />
                <Location name = "Brittain" img = "https://dining.gatech.edu/sites/default/files/styles/main_image_/public/main_image/2023-08/51744590177_a9f004de6c_o.jpg?h=71976bb4&itok=zslIpSbO"/>
                <Location name = "Nav" img = "https://news.gatech.edu/sites/default/files/hg_media/north-ave-dining2crop.jpg"/> 
                <Location name = "Bento Bus" img = "https://spatialdrift.com/wp-content/uploads/2014/04/2014-04-05-19.28.jpg"/>
                <Location name = "Campus Crust" img = "https://dining.gatech.edu/sites/default/files/alt_images/2023-08/AdobeStock_388161051.jpeg"/>
            </div>
        </div>
    )
}
