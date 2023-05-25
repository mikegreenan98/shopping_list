import { useState } from "react";
// import CurrencyInput from "react-currency-input-field";


const AddItem = ({shoppingList, setShoppingList}) => {

    // local state for this componenent
    const [newItem, setNewItem] = useState("");
    const [newItemPrice, setNewItemPrice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem !== ""){
            setShoppingList([...shoppingList, {"item": newItem, "price": newItemPrice, "got": false}]);
            // clear local state now that shoppingList has been updated
            setNewItem("");
            setNewItemPrice("");
        }
    }

    return(
        <div>
        <form onSubmit={handleSubmit} className="addItemForm">
            <span>add new items here:</span>
            <br></br>
            <textarea
                id="newItem"
                maxLength="50"
                value={newItem}
                onChange={(event) => {setNewItem(event.target.value);}}
            >
            </textarea>

            <br></br>

            <label htmlFor="newItemPrice">Approximate price? £ </label>
            <input id="newItemPrice" 
            type="number" 
            value={newItemPrice} 
            onChange={(event)=>{
            setNewItemPrice(+event.target.value)}} />
            <br></br>

        {/* <CurrencyInput
            name="currencyInput"
            id="currencyInput"
            data-number-to-fixed="2"
            data-number-stepfactor="100"
            value={newItemPrice}
            placeholder=""
            onChange={(event)=>{setNewItemPrice(isNaN(+event.target.value)? 0 : +event.target.value)}}
            allowDecimals
            decimalsLimit="2"
            disableAbbreviations
      /> */}

            <button type="submit">Confirm new item to add to list</button>
        </form>
            <br></br>
            </div>
        );

};

export default AddItem;