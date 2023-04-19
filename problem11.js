//Q11: A foof ordering app needs to sort the menu items by price.


//define an array of objects , which represents two properties name and price for a menu Items
const menuItems = [
	{ name : "Burger", price: 5.99 },
	{ name : "Chicken Fries", price: 2.99},
	{ name : "Soda", price: 1.99},
	{ name : "Pizza", price: 10.99  },
];
//use comparison function to sort the array.
menuItems.sort((a, b) => a.price - b.price);
console.log(menuItems); //print the sorted menu Items.