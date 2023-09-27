// const shoppingCart = [
//     {Name : "Shoe", Price : 2200, Quantity : 2},
//     {Name : "Shirt", Price : 500, Quantity : 4},
//     {Name : "Pant", Price : 2500, Quantity : 2},
//     {Name : "Watch", Price : 2050, Quantity : 1},
// ]

// function totalCost (products){
//     let totalSum = 0;
//     for (i = 0; i < products.length; i++){
//         const product = products [i];
//         const productTotal = product.Price * product.Quantity;
//         totalSum = totalSum + productTotal;
//         // console.log (product);
//     }
//     return totalSum;
// }

// const expense = totalCost (shoppingCart);
// console.log ("Total Quantity : ", expense);

const shoppingCart = [
    {Name : "Shoe", Price : 2200, Quantity : 2},
    {Name : "Shirt", Price : 500, Quantity : 4},
    {Name : "Pant", Price : 2500, Quantity : 2},
    {Name : "Watch", Price : 2050, Quantity : 1},
]

function totalCost (products){
    let totalSum = 0;
    for (i = 0; i < products.length; i++){
        const product = products [i];
        totalSum = totalSum + product.Quantity;
        // console.log (product);
    }
    return totalSum;
}

const expense = totalCost (shoppingCart);
console.log ("Total Quantity : ", expense);