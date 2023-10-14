export type FoodType = {
    name: string,
}

export type StationType = {
    name: string,
    checked: boolean,
    foods: FoodType[],
}
