import './App.css';
import {useState, useEffect} from 'react';
import Header from './Components/Header';
import AddItem from './Components/AddItem';
import ShoppingList from './Components/ShoppingList';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [totalSpend, setTotalSpend] = useState(0);

  //Retrieve shoppingList from local storage on the first/opening render
  useEffect(() => {
    const listInStorage = JSON.parse(localStorage.getItem('SHOPPING_LIST_LOCAL'));
    if (listInStorage) {
      setShoppingList(listInStorage);
      // TBD ---- setTotalSpend(....TBD...));
    }
  }, []);

  // Every time shoppingList is changed, save it to local storage
  useEffect(() => {
    // If test below is needed - See README for "React StrictMode Issue"
    if(shoppingList.length > 0){
      localStorage.setItem('SHOPPING_LIST_LOCAL', JSON.stringify(shoppingList));
    }
    console.log(shoppingList);
}, [shoppingList]);

return (
  <div className="App">
      <Header totalSpend={totalSpend}/>
      <AddItem 
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
                totalSpend={totalSpend}
                setTotalSpend={setTotalSpend}
      />
      <ShoppingList
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
      />
  </div>
  );
}

export default App;

