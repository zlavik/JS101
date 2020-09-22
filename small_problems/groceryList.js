function buyFruit(list) {
  let produce;
  let quantity;
  let groceryList = [];

  for (let idx = 0; idx < list.length; idx++) {
    quantity = list[idx][1];
    produce = list[idx][0];

    while (quantity > 0) {
      groceryList.push(produce);
      quantity--;
    }
  }
  return groceryList;
}


buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]