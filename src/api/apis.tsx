//types
import { CartItemType } from "../App";

export const getProducts = async(): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json(); //await for json

