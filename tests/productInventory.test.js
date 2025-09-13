const productInventory = require('../productInventory');

const products =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }        
];

const productsOver799 =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Tablet", price: 800, inStock: true }    
];

const productsSortedByPrice = [
  { name: 'Keyboard', price: 100, inStock: false },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 800, inStock: true },
  { name: 'Laptop', price: 1000, inStock: true }
];

describe("The calculateDiscount() function", () => {
    //Positive
    test("should return a number equal to the proper discount", () => {
        expect(productInventory.calculateDiscount(100, .1)).toBe(90);
    });
    //Negative
    test("should handle invalid discountRate gracefully", () => {
        expect(productInventory.calculateDiscount(100, -0.1)).toBe(null);
    });
    //Edge
    test("should handle edge case with no discount", ()=>{
        expect(productInventory.calculateDiscount(100, 0)).toBe(100);
    });
});


describe("The filterProducts() function", ()=>{
    //Positive
    test("should apply valid filter", ()=>{
        expect(productInventory.filterProducts(products, (objectName) => objectName.price >= 800)).toEqual(productsOver799);
    });
    //Negative
    test("should handle invalid filter gracefully", ()=>{
        expect(productInventory.filterProducts("str",(objectName) => objectName.price >= 800)).toEqual([]);
    });
    //Edge
    test("should handle edge case with empty array", ()=>{
        expect(productInventory.filterProducts([],(objectName) => objectName.price >= 800)).toEqual([]);
    });
});

describe("The sortInventory() function", ()=>{
    //Positive
    test("should apply valid sort", ()=>{
        expect(productInventory.sortInventory(products, "price")).toEqual(productsSortedByPrice);
    });
    //Negative
    test("Should handle invalid key gracefully", ()=>{
        expect(productInventory.sortInventory(products, 2)).toEqual([]);
    });
    //Edge
    test("Should handle edge case with empty array", ()=>{
        expect(productInventory.sortInventory([], "price")).toEqual([]);
    });
});
