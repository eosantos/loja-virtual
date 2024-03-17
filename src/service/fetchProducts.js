// services/productsService.js
export const fetchProducts = () => {
  return fetch('https://fakestoreapi.com/products?limit=5')
    .then((res) => res.json())
    .then((json) => json)
}
