import { render, screen } from '@testing-library/react';
import App from './App';
import { addAllPrices } from './utils';


describe('test suite for addAllPrices (in utils)', ()=>{
  test('empty shopping list array returns zero', ()=>{
    expect(addAllPrices([])).toBe(0);
  })  
  
  test('returns sum of all prices in the shopping list array', ()=>{
    const inputShoppingList = [
      {"item": "bread", "price": 3, "got": false},
      {"item": "eggs", "price": 4, "got": true},
      {"item": "ham", "price": 5, "got": false},
    ]
    expect(addAllPrices(inputShoppingList)).toBe(12);
  })

  test('returns sum of all prices - deals with negatives', ()=>{
    const inputShoppingList = [
      {"item": "bread", "price": -3, "got": false},
      {"item": "eggs", "price": 0, "got": true},
      {"item": "ham", "price": -5, "got": false},
    ]
    expect(addAllPrices(inputShoppingList)).toBe(-8);
  })
})
