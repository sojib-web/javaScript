const products = [
  { id: 1, name: "sojib", price: 122222 },
  { id: 2, name: "phone", price: 122222 },
  { id: 2, name: "sojib", price: 122222 },
  { id: 2, name: "phone", price: 122222 },
  { id: 2, name: "sojib", price: 122222 },
  { id: 2, name: "Phone", price: 122222 },
];

function matchedProduces(products, search) {
  const matched = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      matched.push(product);
    }
  }
  return matched;
}

const result = matchedProduces(products, "phone");
console.log(result);
