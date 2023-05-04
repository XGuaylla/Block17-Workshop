const coffeeMenu = require("./coffee_data")
// import coffeeMenu from "./coffee_data"

console.log(coffeeMenu)

// Prints array of only drink names
const drinks = coffeeMenu.map(drink => drink.name)
console.log(drinks);

// Prints drinks that are 5 and under
const drinksUnderFive = coffeeMenu.filter(drink => drink.price <= 5)
const drinks2 = drinksUnderFive.map(drink => drink.name)
console.log(drinks2)

// Prints drinks that are priced evenly
const drinksPricedEven = coffeeMenu.filter(drink => drink.price % 2 === 0)
const drinks3 = drinksPricedEven.map(drink => drink.name)
console.log(drinks3)

// Adds drink price together
const total = coffeeMenu.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
console.log(total)

// Returns only drinks that are seasonal
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal === true)
const drinks4 = seasonalDrinks.map(drink => drink.name)
console.log(drinks4)

drinks4.forEach(function(seasonalDrink) {
    console.log(seasonalDrink + ' with imported beans')
})


