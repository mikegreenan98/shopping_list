import './App.css';
import {useState, useEffect} from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import ShoppingList from './Components/ShoppingList';
const {addAllPrices} = require('./utils');

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);
  console.log(totalSpend);
  console.table(shoppingList);

  //Retrieve shoppingList from local storage on the first/opening render
  useEffect(() => {
    const listInStorage = JSON.parse(localStorage.getItem('SHOPPING_LIST_1'));
    if (listInStorage) {
      setShoppingList(listInStorage);
      setTotalSpend(addAllPrices(listInStorage));
    }
  }, []);

  // Every time shoppingList is changed:
  // 1) save shoppgingList to local storage
  // 2) update the totalSpend state based on new shoppingList
  useEffect(() => {
    // NOTE: The 'If' test below is needed - See README for "React StrictMode Issue"
    if(shoppingList.length > 0){
      localStorage.setItem('SHOPPING_LIST_1', JSON.stringify(shoppingList)); //(1)
      setTotalSpend(addAllPrices(shoppingList)); // (2)
    }
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

