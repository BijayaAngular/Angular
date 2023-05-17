export interface IMeal{
       _id: string,
       mealtype_id: number,
       mealtype: string,
      content: string,
      meal_image: string
}
export interface ICity
{
    _id: string,
    location_id: number,
    location_name: string,
    state_id: number,
    state: string,
    country_name: string
}
export interface IResturants
{
    _id: string,
    restaurant_id: number,
    restaurant_name: string
    location_id: number,
    state_id: number,
    address: string,
    average_rate: number,
    rating_text: string,
    cost: number,
    contact_number: string,
    mealTypes:IMealType[],
    cuisines:ICuisinesType[],
    resturant_thumb:string,
    image_gallery:string[],
    restaurant_thumb:string
}
export interface IMealType
{
    mealtype_id:number,
    mealtype_name:string
}
export interface ICuisinesType
{
    cuisine_id:number,
    cuisine_name:string
}