import { useState } from "react";
import { useQuery } from "react-query";
// components
import Item from "./Item/IItem";
import { Drawer, Progress, Col, Row, Badge } from 'antd';
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
    const handleAddToCart = (clickedItem: CartItemType) => null;
    const handleRemoveFromCart = () => null;

    //when loading
    if(isLoading) return <Progress />
    //when error
    if(error) return <div>Something went wrong.....</div>

    return (
        <Wrapper>
            <Row gutter={{ xs: 4, sm: 5, md: 6, lg: 7 }}>
                {
                    data?.map((item:CartItemType) => (
                        <Col key={item.id} className="gutter-row">
                            <Item item={item} handleAddToCart={handleAddToCart} />
                        </Col>
                    ))
                }
            </Row>
        </Wrapper>
    );
}

export default App;