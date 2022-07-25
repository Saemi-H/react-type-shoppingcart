import { useState } from "react";
import { useQuery } from "react-query";
// components
import Item from "./Item/IItem";
import Cart from "./Cart/Cart";
import { Drawer, Progress, Col, Row, Badge } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { getProducts } from "./api/apis";

//styles
import { Wrapper, StyledButton } from "./App.styles";

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



const App = () => {
    //add Cart states
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as CartItemType[]);
    // add React Query fetching data
    const { data, isLoading, error } = useQuery(["products"],() => getProducts());

    //total amount of items
    const getTotalItems = (items: CartItemType[]) => 
        items.reduce((prev: number, item) => prev + item.amount, 0);
    const handleAddToCart = (clickedItem: CartItemType) => {
        setCartItems(prev => {
            //1. if item is already in cart?
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if(isItemInCart){
                return prev.map(item => (
                    item.id === clickedItem.id
                    ? {...item, amount: item.amount + 1}
                    : item
                ))
            }
            // else first time
            return [...prev, {...clickedItem, amount: 1}]
        })
    };
    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev => (
            prev.reduce((acc, item) => {
                if(item.id === id){
                    // check if item is 1
                    if(item.amount === 1) return acc;
                    return [...acc, {...item, amount: item.amount - 1}]
                }else{
                    return [...acc, item]
                }
            }, [] as CartItemType[])
        ))
    }

    //when loading
    if(isLoading) return <Progress />
    //when error
    if(error) return <div>Something went wrong.....</div>

    return (
        <Wrapper>
            <Drawer placement="left"  width={500} visible={cartOpen} onClose={()=> setCartOpen(false)}>
                <Cart 
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge count={getTotalItems(cartItems)}>
                    <ShoppingCartOutlined />
                </Badge>
            </StyledButton>
            <Row gutter={[16, 16]}>
                {
                    data?.map((item:CartItemType) => (
                        <Col key={item.id} span={6}>
                            <Item item={item} handleAddToCart={handleAddToCart} />
                        </Col>
                    ))
                }
            </Row>
        </Wrapper>
    );
}

export default App;