export type FoodType = {
    name: string,
    station: string,
}

export type StationType = {
    name: string,
    checked: boolean,
    foods: FoodType[],
}
