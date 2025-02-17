// let products = ["laptop", "phone", "laptop", "mobile", "desktop", "phone"];

// let uniqueProducts = [];
// for (let i = 0; i < products.length; i++) {
//   const element = products[i];
//   //   console.log(products[i]);
//   if (!uniqueProducts.includes(element)) {
//     uniqueProducts.push(element);
//   }
// }
// console.log(products.length);

// console.log(uniqueProducts);

// problem 2

// const products = [
//   { name: "laptop", category: "electronics" },
//   { name: "T-Shirt", category: "Clothing" },
//   { name: "Headphone", category: "electronics" },
//   { name: "jeans", category: "Clothing" },
// ];

// let categoryProduct = {
//   electronics: [],
//   Clothing: [],
// };
// for (let i = 0; i < products.length; i++) {
//   const singleProduct = products[i];

//   if (singleProduct.category === "electronics") {
//     // console.log(singleProduct);
//     // @ts-ignore
//     categoryProduct.electronics.push(singleProduct.name);
//   } else if (singleProduct.category === "Clothing") {
//     // @ts-ignore
//     categoryProduct.Clothing.push(singleProduct.name);
//   }
// }
// console.log(categoryProduct);
// console.log(categoryProduct);

// task 3
// let price = "$249";
// let chars = price.split("");
// // console.log(chars);
// let sum = 0;
// for (let i = 0; i < chars.length; i++) {
//   let element = chars[i];
//   // @ts-ignore
//   // console.log(element, isNaN(element));
//   // @ts-ignore
//   if (!isNaN(element) && element !== " ") {
//     // console.log(element);
//     sum += parseInt(element);
//   }
// }

// console.log(sum);

// task 4

// let desc = "Lightweight and durable backpack";

// let words = desc.split(" ");

// let reversed = " ";
// for (let i = words.length - 1; i >= 0; i--) {
//   // console.log(words[i]);
//   let element = words[i];

//   // @ts-ignore
//   reversed += element;
//   if (i > 0) {
//     reversed += " ";
//   }
// }
// console.log(reversed);

// inchTofeet
