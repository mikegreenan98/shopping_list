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
    <ul id="shoppingList">
        <div id="shoppingListDisplay">
        <span id="listInstructions">click the items below whilst you shop:</span>
        <br></br>
        <p></p>
        <span id="listInstructionsRed"><b>Red</b></span>
        <span id="listInstructions">=not yet in basket ; </span>
        <span id="listInstructionsGreen"><b>Green</b></span>
        <span id="listInstructions">= in basket</span>
        <br></br>
        <br></br>
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
