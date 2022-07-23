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
    await(await fetch('https://fakestoreapi.com/products')).json(); //await for json
const App = () => {
    // add React Query fetching data
    const { data, isLoading, error } = useQuery("products", getProducts)
    return (
        <div className="App">
            start
        </div>
    );
}

export default App;