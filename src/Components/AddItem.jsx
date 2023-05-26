import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
// import CurrencyInput from 'react-native-currency-input';


const AddItem = ({shoppingList, setShoppingList}) => {

    // local state for this componenent
    const [newItem, setNewItem] = useState("");
    const [newItemPrice, setNewItemPrice] = useState(0);

    // temp is used becauise newitemprice can't be used as the value in the 
    // CurrencyInput because of the way I am validating the number here
    const [temp, setTemp] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newItem !== ""){
            setShoppingList([...shoppingList, {"item": newItem, "price": newItemPrice, "got": false}]);
            // clear local state now that shoppingList has been updated
            setNewItem("");
            setNewItemPrice(0);
            setTemp("");
        }
    }


  const handleChange = (e) => {
    e.preventDefault();
    const {value} = e.target;
    const parsedValue = value.replace(/[^.\d]/gi, "");
    // not sure why but needed this intermediate step to set the currency value correctly
    let parsedValueNum = +parsedValue;
    parsedValueNum = +parsedValueNum.toFixed(2);
    setNewItemPrice(parsedValueNum);
    setTemp(parsedValue);
  };

//   const handleOnBlur = () => {
//     console.log('blur');
//     setNewItemPrice(Number(newItemPrice).toFixed(2));
//     console.log(newItemPrice + typeof newItemPrice);
// }

    return(
        <div>
        <form onSubmit={handleSubmit} className="addItemForm">
            <span>add new items here:</span>
            <br></br>
            <textarea
                id="newItem"
                maxLength="25"
                value={newItem}
                onChange={(event) => {setNewItem(event.target.value);}}
            >
            </textarea>

            <br></br>

            <label htmlFor="newItemPrice">Approximate price? £ </label>
        <CurrencyInput
            prefix={"£"}
            name="currencyInput"
            id="currencyInput"
            data-number-to-fixed="2"
            data-number-stepfactor="100"
            // value={newItemPrice}
            value={temp}
            placeholder=""
            onChange={handleChange} 
            // onBlur={handleOnBlur}
            allowDecimals
            decimalsLimit="2"
            disableAbbreviations
            CurrencyInput="£"
      />

            <button type="submit">Confirm new item to add to list</button>
        </form>
            <br></br>
            </div>
        );

};

export default AddItem;