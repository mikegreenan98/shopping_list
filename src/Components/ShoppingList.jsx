import {FaLongArrowAltUp, FaLongArrowAltDown} from 'react-icons/fa'
import { moveUpOrDown, removeItem } from '../utils'


const ShoppingList = ({shoppingList, setShoppingList}) => {

    const handleMove = (direction, ind)=>{
        setShoppingList(moveUpOrDown(direction, ind, shoppingList));
    };

    const handleRemove = (ind)=>{
        setShoppingList(removeItem(ind, shoppingList));
    };


    const handleToggle = (ind)=>{
        setShoppingList(shoppingList.map((listItem,index)=>{
            if(index === ind){
              return {"item": listItem.item, "price": listItem.price, "got": !listItem.got};
            } else {
              return {"item": listItem.item, "price": listItem.price, "got": listItem.got};
            }
          }));
    };

return(
    <ul id="shoppingListDisplay">
        <div>
        {shoppingList.map((listItem, index) => {
        return (
            <li className='shoppingListItem' key={index}>
                <button 
                    className={listItem.got ? 'gotItemButton': 'notGotItemButton'}
                    onClick={()=>{handleToggle(index)}}>
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
