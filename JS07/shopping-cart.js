const shoppingCart = [
    {Name : "Shoe", Price : 2200},
    {Name : "Shirt", Price : 500},
    {Name : "Pant", Price : 2500},
    {Name : "Watch", Price : 2050},
]

function totalCost (products){
    let totalSum = 0;
    for (i = 0; i < products.length; i++){
        const product = products [i];
        totalSum = totalSum + product.Price;
        // console.log (product);
    }
    return totalSum;
}

const expense = totalCost (shoppingCart);
console.log ("Total Cart : ", expense);