// Define an array of products with details such as name, price, and brand.
const products = [
    {name: "laptop", price: 55000, brand: "asus"},
    {name: "phone", price: 15000, brand: "realme"},
    {name: "watch", price: 2000, brand: "xiaomi"},
    {name: "camera", price: 155000, brand: "sony"},
];

// Extract an array of brand names from the products using the map function.
const brands = products.map(product => product.brand);

// Log the array of brand names to the console.
console.log(brands);
