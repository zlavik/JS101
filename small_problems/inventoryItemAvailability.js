let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryItem, transaction) {
  let currentItem = [];
  let result = [];

  for (let idx = 0; idx < transactions.length; idx++) {
    currentItem = transaction[idx];
    if (currentItem.id === inventoryItem) {
      result.push(currentItem);
    }
  }
  return result;
}

function getSupply(currentinventoryItems) {
  let currentSupply = 0;

  for (let idx = 0; idx < currentinventoryItems.length; idx++) {
    let currentItem = currentinventoryItems[idx];
    if (currentItem.movement === 'in') {
      currentSupply += currentItem.quantity;
    } else {
      currentSupply -= currentItem.quantity;
    }
  }
  return currentSupply;
}


function isItemAvailable(inventoryItem, transaction) {
  let currentinventoryItems = transactionsFor(inventoryItem, transaction);
  return getSupply(currentinventoryItems) > 0;
}

// or

function isItemAvailable_(item, transactions) {
  let quantity = transactionsFor(item, transactions).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") {
        return sum + transaction.quantity;
      } else {
        return sum - transaction.quantity;
      }
    },
    0
  );
  return quantity > 0;
}


console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true