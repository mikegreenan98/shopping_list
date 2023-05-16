

function moveUpOrDown(direction, index, array) {
    let newArray = [...array];
    if(direction === 'UP' && index > 0){
        [newArray[index-1], newArray[index]] = [newArray[index], newArray[index-1]];
    }
    if(direction === 'DOWN' && index < array.length-1){
        [newArray[index], newArray[index+1]] = [newArray[index+1], newArray[index]];
    }
    return newArray;
}

function removeItem(index, array) {
    let newArray = [...array];

    newArray.splice(index,1);
    return newArray;
}

function addAllPrices(array){
    console.log(array);
    let tally = 0;
    for(let i=0; i<array.length; i++){
        tally += array[i].price;
    }
    return tally;
}

module.exports = {moveUpOrDown, removeItem, addAllPrices};