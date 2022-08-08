"use strict";
let car = {
    regNo: 54325278,
    modelName: "Alto 800",
};
function eat(food) {
    console.log(`I ate ${food.quantity} ${food.foodName}.`);
}
/*
TS is upset here coz it didn't expect us to provide the property pricePerUnit.

eat({
  pricePerUnit: 10,
})
*/
/*
TS is upset here coz it didn't expect us to provide the property pricePerUnit.

eat({
  quantity: 7
});
*/
eat({ quantity: 5, foodName: 'samosa' }); // everything good!
// if we really want to give something extra, then do this
const ninjaFood = {
    quantity: 5,
    foodName: 'dumplings',
    village: 'leaf village'
};
eat(ninjaFood); // now no errors - WAT!