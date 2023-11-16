const product = [
    {name : "laptop", price : 55000, brand : "asus"},
    {name : "phone", price : 15000, brand : "realme"},
    {name : "watch", price : 2000, brand : "xiaomi"},
    {name : "camera", price : 155000, brand : "sony"},
];

const brands = product.map(product => product.brand);
console.log (brands);