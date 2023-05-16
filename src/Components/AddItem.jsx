import { useState } from "react";

const AddItem = ({shoppingList, setShoppingList}) => {

    // local state for this componenent
    const [newItem, setNewItem] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem !== ""){
            setShoppingList([...shoppingList, {"item": newItem, "price": newItemPrice, "got": false}]);
            setNewItem("");
            setNewItemPrice("");
        }
    }

    return(
        <form onSubmit={handleSubmit} className="addItemForm">

            <label htmlFor='newItem'>Enter item name here: </label>
            <textarea
                id="newItem"
                value={newItem}
                onChange={(event) => {setNewItem(event.target.value);}}
            >
            </textarea>

            <br></br>
            <label htmlFor="newItemPrice">Enter approximate price £</label>
            <input id="newItemPrice" 
            type="number" 
            value={newItemPrice} 
            onChange={(event)=>{
            setNewItemPrice(+event.target.value)}} />
            <br></br>
            <button type="submit">Confirm new item to add to list</button>
        </form>
        );

};

export default AddItem;