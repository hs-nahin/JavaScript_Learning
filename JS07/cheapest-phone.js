const phones = [
    { Brand : "Samsung", Camera : 12, Storage : "32GB", Price : 55000, Color : "White"},
    { Brand : "OnePlus", Camera : 32, Storage : "64GB", Price : 45000, Color : "Black"},
    { Brand : "Xiaomi", Camera : 48, Storage : "128GB", Price : 35000, Color : "White"},
    { Brand : "Walton", Camera : 48, Storage : "128GB", Price : 25000, Color : "Black"},
];

function cheapestPhone (phones){
    let cheapest = phones[0];
    for (i = 0; i < phones.length; i++){
        const phone = phones [i];
        if (phone.Price < cheapest.Price){
            cheapest = phone;
        }
    }
    return cheapest;
};

const mySelection = cheapestPhone (phones);
console.log (mySelection);