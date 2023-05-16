import './App.css';
import {useState, useEffect} from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import ShoppingList from './Components/ShoppingList';
const {addAllPrices} = require('./utils');

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  // console.log(totalSpend);
  // console.table(shoppingList);

  //(1) Retrieve shoppingList from local storage on the first/opening render
  //(2) Also set totalSpend from storage to avoid need to wait for async set state
  useEffect(() => {
    const listInStorage = JSON.parse(localStorage.getItem('SHOPPING_LIST_3'));
    if (listInStorage) {
      setShoppingList(listInStorage); // (1)
      setTotalSpend(addAllPrices(listInStorage)); // (2)
    }
  }, []);

  // Every time shoppingList is changed:
  // 1) save shoppingList to local storage
  // 2) update the totalSpend state based on new shoppingList
  useEffect(() => {
    // NOTE: The 'If' test below is needed - See README for "React StrictMode Issue"
    // NOTE2 - Have commented-out below 'if' test and StrictMode in order to handle when shoppingList becomes zero length after a delete
    // if(shoppingList.length > 0){ 
      localStorage.setItem('SHOPPING_LIST_3', JSON.stringify(shoppingList)); //(1)
      setTotalSpend(addAllPrices(shoppingList)); // (2)
    // }
}, [shoppingList]);

return (
  <div className="App">
      <Header totalSpend={totalSpend}/>
      <AddItem 
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
      />
      <ShoppingList
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
      />
  </div>
  );
}

export default App;

