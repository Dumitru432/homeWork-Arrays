// Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array.

const groceriesList = [
  { nameOfProduct: "apple", amount: 12, bought: true },
  { nameOfProduct: "milk", amount: 2, bought: true },
  { nameOfProduct: "bread", amount: 5, bought: false },
  { nameOfProduct: "salami", amount: 2, bought: true },
  { nameOfProduct: "avocado", amount: 6, bought: false },
  { nameOfProduct: "sugar", amount: 3, bought: false },
];

// Display the entire list, so that the not yet purchased items go before the bought ones.


// aici o sa fie aceeasi lista pe care am definit o la inceput 'groceriesList', doar ca ordonata conform cerinta
// functia sort este utilizata pentru a sorta elementele intr un array
// deci groceriesList.sort(function(a, b) {   => este o functie de comparare care este utilizata de metoda sort();
// aceasta functie de comparare primeste 2 elemene (a, b) si returneaza un numar negativ daca (a) trebuie plasat inainte de b
// b retunreaza numar pozitiv daca b trebuie plasat inainte de a si zero daca nu trebuie schimbat cu locul

groceriesList.sort(function (a, b) {
  if (a.bought && !b.bought) {
    // daca este true ori nu este true returneaza 1 =>true ; apple , milk, salami
    // aici o sa scoata pe cele care au la bought = true
    return 1;
  } else if (!a.bought && b.bought) {
    // daca nu este true si este true => false => bread, avocado, sugar
    // aici o sa scoata pe cele care au la bought = false
    return -1;
  } else {
    return 0;
  }
});
console.log(groceriesList);

// in prima faza asa am rezolvat exercitiul 
const bought = [];
const notBought = [];

for (let i = 0; i < groceriesList.length; i++) {
  if (groceriesList[i].bought) {
    bought.push(groceriesList[i]);
  } else {
    notBought.push(groceriesList[i]);
  }
}
console.log(bought);
console.log(notBought);

// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one.

function addNewItem(object, anArray){
    let found = false; 
    for(let i=0; i < anArray.length; i++){
        if(anArray[i].nameOfProduct === object.nameOfProduct){
            anArray[i].amount += object.amount
            found = true; 
            break
        } 
    }
    if(!found){
        anArray.push(object)
    }
}

addNewItem({ nameOfProduct: "salami", amount: 2, bought: true }, groceriesList)
console.log(groceriesList)

addNewItem({ nameOfProduct: "test", amount: 1, bought: true }, groceriesList)
console.log(groceriesList) 

//Purchasing a product. The function accepts the name of a product and marks it as bought. 

function purchaseProduct(productName) {
  for (let i = 0; i < groceriesList.length; i++) {
    if (groceriesList[i].nameOfProduct === productName) {
      groceriesList[i].bought = true;
      break; // Exit the loop once the product is found and marked as bought
    }
  }
}
purchaseProduct("bread");

// 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

const shopReceipt = [
  { productName: "Apple", amountBought: 12, pricePerItem: 0.5 },
  { productName: "Milk", amountBought: 2, pricePerItem: 1.99 },
  { productName: "Bread", amountBought: 3, pricePerItem: 2.5 },
  { productName: "Salami", amountBought: 1, pricePerItem: 4.99 },
  { productName: "Avocado", amountBought: 2, pricePerItem: 1.75 },
];

//Print the receipt out on the screen.

function printReceipt(receipt) {
  console.log("Receipt:");
  for (const item of receipt) {
    console.log(`${item.productName}: ${item.amountBought} x $${item.pricePerItem}`);
  }
}
printReceipt(shopReceipt);

//Counting the sum of the purchase.
function countTotalPurchase(receipt) {
  let total = 0;
  for (const item of receipt) {
    total += item.amountBought * item.pricePerItem;
  }
  return total;
}
const totalPurchase = countTotalPurchase(shopReceipt);
console.log("Total Purchase:", totalPurchase);

//Extracting the most expensive item on the receipt.
function findMostExpensiveItem(receipt) {
  let mostExpensiveItem = null;
  let maxPrice = 0;
  for (const item of receipt) {
    if (item.pricePerItem > maxPrice) {
      mostExpensiveItem = item;
      maxPrice = item.pricePerItem;
    }
  }
  return mostExpensiveItem;
}
const mostExpensive = findMostExpensiveItem(shopReceipt);
console.log("Most Expensive Item:", mostExpensive);

//Counting an average item price on the receipt.

function calculateAveragePrice(receipt) {
  let totalPrices = 0;
  for (const item of receipt) {
    totalPrices += item.pricePerItem;
  }
  const averagePrice = totalPrices / receipt.length;
  return averagePrice;
}
const averagePrice = calculateAveragePrice(shopReceipt);
console.log("Average Price:", averagePrice);

// 3. Create an array of css-styles (color, font size, alignment, underline etc.) 
//Each element of the array is an object consisting of two properties: style name and style value, 
//Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.

function printStyledText(styles, text) {
  // Generate the style attribute string
  let styleAttribute = "";
  for (const style of styles) {
    styleAttribute += `${style.name}:${style.value};`;
  }

  // Write the styled text using document.write()
  document.write(`<p style="${styleAttribute}">${text}</p>`);
}

const styleArray = [
  { name: "color", value: "red" },
  { name: "font-size", value: "18px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
];

const text = "This is a sample text.";

printStyledText(styleArray, text);

// 4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.
const classroomsArray = [
  { name: "Classroom A", seats: 15, faculty: "Faculty A" },
  { name: "Classroom B", seats: 12, faculty: "Faculty B" },
  { name: "Classroom C", seats: 18, faculty: "Faculty A" },
  // Additional classroom objects...
];

// Display all the classrooms.
function displayAllClassrooms(classrooms) {
  for (const classroom of classrooms) {
    console.log(`Classroom: ${classroom.name}`);
    console.log(`Seats: ${classroom.seats}`);
    console.log(`Faculty: ${classroom.faculty}`);
    console.log("----------------------");
  }
}

// Display all the classrooms for a given faculty.

function displayClassroomsByFaculty(classrooms, faculty) {
  for (const classroom of classrooms) {
    if (classroom.faculty === faculty) {
      console.log(`Classroom: ${classroom.name}`);
      console.log(`Seats: ${classroom.seats}`);
      console.log(`Faculty: ${classroom.faculty}`);
      console.log("!");
    }
  }
}

// Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
function displayClassroomsForGroup(classrooms, group) {
  for (const classroom of classrooms) {
    if (classroom.seats >= group.numberOfStudents && classroom.faculty === group.faculty) {
      console.log(`Classroom: ${classroom.name}`);
      console.log(`Seats: ${classroom.seats}`);
      console.log(`Faculty: ${classroom.faculty}`);
      console.log("!");
    }
  }
}
const group = { name: "Group A", numberOfStudents: 15, faculty: "Faculty A" };
displayClassroomsForGroup(classroomsArray, group);




// A function for sorting all the classrooms by number of seats.
function sortClassroomsBySeats(classrooms) {
  return classrooms.slice().sort((a, b) => a.seats - b.seats);
}

// A function for sorting all the classrooms by name in alphabetical order.
function sortClassroomsByName(classrooms) {
  return classrooms.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const sortedByName = sortClassroomsByName(classroomsArray);
console.log(sortedByName);