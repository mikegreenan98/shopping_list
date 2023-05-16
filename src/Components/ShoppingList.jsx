import {FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'
import { moveUpOrDown, removeItem } from '../utils'


const ShoppingList = ({shoppingList, setShoppingList}) => {

    const handleMove = (direction, ind)=>{
        setShoppingList(moveUpOrDown(direction, ind, shoppingList));
    }

    const handleRemove = (ind)=>{
        let temp = [...shoppingList];
        console.log(temp);
        setShoppingList(removeItem(ind, shoppingList));
        setShoppingList(removeItem(ind, temp));
    }


    const handleToggle = (ind)=>{}

return(
    <ul id="shoppingListDisplay">
        <div>
        {shoppingList.map((listItem, index) => {
        return (
            <li className='shoppingListItem' key={index}>
                <button className="ItemButton" onClick={()=>{handleToggle(index)}}>
                    {listItem.item} (£{listItem.price})
                </button>

                <button className='upButton' onClick={()=>{handleMove('UP', index)}}><FaLongArrowAltUp /></button>

                <button className='deleteButton' onClick={()=>{handleRemove(index)}}>Delete<br></br>item</button>
                
                <button className='downButton' onClick={()=>{handleMove('DOWN', index)}}><FaLongArrowAltDown /></button>
            </li>);
        })}
        </div>
    </ul>
)

}

export default ShoppingList;
