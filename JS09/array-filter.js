// Array Filter and Find

// Array of products with details like name, price, and brand.
const products = [
    {name: "laptop", price: 55000, brand: "asus"},
    {name: "phone", price: 15000, brand: "realme"},
    {name: "watch", price: 2000, brand: "xiaomi"},
    {name: "camera", price: 155000, brand: "sony"},
];

// Filter products based on price less than 5000 and log the result.
const findCheap = products.filter(product => product.price < 5000);
console.log("Cheap products:", findCheap);
console.log();

// Filter products whose name includes the letter 'l' and log the result.
const filterByName = products.filter(p => p.name.includes("l"));
console.log("Products with 'l' in the name:", filterByName);
console.log();

// Find the first product whose brand includes the letter 'l' and log the result.
const findByBrand = products.find(product => product.brand.includes("l"));
console.log("Product found by brand:", findByBrand);
