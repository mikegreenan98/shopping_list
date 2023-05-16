import { render, screen } from '@testing-library/react';
import App from './App';
import { addAllPrices, moveUpOrDown, removeItem } from './utils';


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
    ];
    expect(addAllPrices(inputShoppingList)).toBe(-8);
  });
});

describe('test suite for moveUpOrDown(utils)', ()=>{
  test('item at "index" in shopping array moves in up direction when "UP" is provided', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    const expectedOutput = [
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "bread first", "price": -3, "got": false},
      {"item": "ham third", "price": -5, "got": false},
    ];
    expect(moveUpOrDown('UP', 1, inputShoppingList)).toEqual(expectedOutput);
  });

  test('item at "index" in shopping array moves in down direction when "DOWN" is provided', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    const expectedOutput = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "ham third", "price": -5, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
    ];
    expect(moveUpOrDown('DOWN', 1, inputShoppingList)).toEqual(expectedOutput);
  });

  test('no change when try to move top item UP', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    const expectedOutput = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    expect(moveUpOrDown('UP', 0, inputShoppingList)).toEqual(expectedOutput);
  });

  test('no change when try to move botton item DOWN', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    const expectedOutput = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    expect(moveUpOrDown('DOWN', 2, inputShoppingList)).toEqual(expectedOutput);
  });
});


describe('test suite for removeItem(utils)', ()=>{
  test('item at "index" in shopping array is deleted', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    const expectedOutput = [
      {"item": "eggs second", "price": 0, "got": true},
      {"item": "ham third", "price": -5, "got": false},
    ];
    expect(removeItem(0, inputShoppingList)).toEqual(expectedOutput);
  });

  test('if only one item in shoppling list, returns an empty array', ()=>{
    const inputShoppingList = [
      {"item": "bread first", "price": -3, "got": false},
    ];
    const expectedOutput = [];
    expect(removeItem(0, inputShoppingList)).toEqual(expectedOutput);
  });


});

