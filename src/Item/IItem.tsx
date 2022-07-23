import { Button } from 'antd';

//Types
import { CartItemType } from "../App"

//styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

//FC = functional component
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        {/* img */}
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
)

export default Item;