import data from "./data.json";




  //TASK #1 | LEVEL #1
  function calculateTotalPrice(prices: number[]): number {
    return prices.reduce((total, price) => total + price, 0);
  }
  const prices = [99.99,  699.99,59.99, 1299.99,  49.99];
  const totalPrice = calculateTotalPrice(prices);
  console.log(totalPrice); 








  //TASK #3 | LEVEL #1
  type Review = {
    user: string
    comment: string
    rating: number
    date: string
  };

  type ProductDetails = {
    brand: string
    model: string
    color: string
  };

  type Product = {
    id: number
    name: string
    category: string
    price: number
    inStock: boolean
    rating: number
    details: ProductDetails
    reviews: Review[]
  };

  type ProductArray = Product[]











  //TASK #4 | LEVEL #2
  function filterByCategory(products: Product[], category: string): Product[] {
    return products.filter(product => product.category === category);
  }
  const electronics = filterByCategory(data, "Electronics");

  console.log(electronics);









 
//TASK #5 | LEVEL #2
function calculateAverageRating(products: Product[], category: string): number {
  const FilterRating = products.filter(product => product.category === category).map(product => product.rating);
  return FilterRating.reduce((a, b) => a + b, 0) / FilterRating.length;
}

const averageRating = calculateAverageRating(data, "Electronics");
console.log(averageRating);










  
//TASK #5 | LEVEL #2
const products: Product[] = data
function findMostExpensiveProduct(products: Product[]): Product | null {
 return products.sort((a, b) => b.price - a.price)[0] || null;
  }
  
const mostExpensiveProduct = findMostExpensiveProduct(products);
console.log(mostExpensiveProduct);








  

//TASK #6 | LEVEL #2
function getAvailableProducts(products: Product[]): Product[] {
    return products.filter(product => product.inStock);
  }
  const availableProducts = getAvailableProducts(products);
  console.log(availableProducts);













  
  
//TASK #7 | LEVEL #2
function findProductByName(products: Product[], name: string): Product | undefined {
    return products.find(product => product.name.toLowerCase() === name.toLowerCase());
  }
  
  const product = findProductByName(data, "Laptop");
  console.log(product);










  
  //TASK #8 | LEVEL #2
  function findProductByName(name) {
    return data.find(product => product.name.toLowerCase() === name.toLowerCase());
  }
  
  const product = findProductByName("Wireless Headphones");
  console.log(product);