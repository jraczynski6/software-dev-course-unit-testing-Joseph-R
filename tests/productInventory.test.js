const productInventory = require('../productInventory');

describe("The calculateDiscount() function", () => {
    //Positive
    test("should return a number equal to the proper discount", () => {
        expect(productInventory.calculateDiscount(100, .1)).toEqual(90);
    });
});


