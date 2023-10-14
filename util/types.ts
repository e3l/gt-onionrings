export type FoodType = {
    name: string,
    station: string,
}

export type StationType = {
    name: string,
    checked: boolean,
    foods: FoodType[],
}

export type LocationType = {
    name: string,
    slug: string,
    nutrisliceSlug: string,
    image: string,
}

export const DEFAULT_LOCATION: LocationType = {
    name: "loading...",
    slug: "",
    nutrisliceSlug: "",
    image: "",
}

export const LOCATIONS: LocationType[] = [
    {
        name: "Willage",
        slug: "willage",
        nutrisliceSlug: "west-village",
        image: "https://nique.net/wp-content/uploads/2017/09/westvillage-color.jpg"
    },
    {
        name: "Brittain",
        slug: "brittain",
        nutrisliceSlug: "brittain",
        image: "https://dining.gatech.edu/sites/default/files/styles/main_image_/public/main_image/2023-08/51744590177_a9f004de6c_o.jpg?h=71976bb4&itok=zslIpSbO",
    },
    {
        name: "Nav",
        slug: "nav",
        nutrisliceSlug: "north-ave-dining-hall",
        image: "https://news.gatech.edu/sites/default/files/hg_media/north-ave-dining2crop.jpg",
    },
    {
        name: "Bento Bus",
        slug: "bento-bus",
        nutrisliceSlug: "bento-bus",
        image: "https://spatialdrift.com/wp-content/uploads/2014/04/2014-04-05-19.28.jpg",
    },
    {
        name: "Campus Crust",
        slug: "campus-crust",
        nutrisliceSlug: "campus-crust",
        image: "https://dining.gatech.edu/sites/default/files/alt_images/2023-08/AdobeStock_388161051.jpeg",
    },
]
