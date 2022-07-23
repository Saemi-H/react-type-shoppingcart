import { useState } from "react";
import { useQuery } from "react-query";
// components
import { Drawer, Progress, Grid, Badge } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";

//styles
import { Wrapper } from "./App.styles";

//types
export type CartItemType = {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
    amount: number; //added customed info
}

const getProducts = async(): Promise<CartItemType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json(); //await for json

const App = () => {
    // add React Query fetching data
    const { data, isLoading, error } = useQuery(["products"],() => getProducts());

    console.log(data);

    const getTotalItems = () => null;
    const handleAddToCart = () => null;
    const handleRemoveFromCart = () => null;

    //when loading
    if(isLoading) return <Progress />
    //when error
    if(error) return <div>Something went wrong.....</div>

    return (
        <div className="App">
            start
            
        </div>
    );
}

export default App;