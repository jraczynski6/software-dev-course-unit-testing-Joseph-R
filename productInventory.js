const products =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }        
];


function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    //calculating
    /*let discountAmount =*/ 
    return price - (price * discountRate);
};


function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
    return [];
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return [];
}

module.exports = { calculateDiscount: calculateDiscount, filterProducts: filterProducts, sortInventory: sortInventory };


/* Test Ideas:
    
    calculateDiscount(price, discountRate):
        positive - correct discount price when both numbers are valid
        negative - price or discountRate is missing/null
        edge - 100% discount, no discount

    filterProducts(products, callback)
        positive - returns filtered products if inStock is true 
        negative - empty/invalid product list or callback
        edge - empty array, no match, all match
        
    sortInventory(inventory, key)
        positive - correctly sort by price and name
        negative - invalid inventory, no key
        edge - empty array, duplicate key     

*/