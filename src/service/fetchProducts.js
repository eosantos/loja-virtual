export async function fetchProducts() {
  return fetch("https://fakestoreapi.com/products/category/men's%20clothing")
    .then((res) => res.json())
    .then((json) => {
      const fourProducts = json.slice(0, 6) // Captura apenas os 6 primeiros produtos
      console.log(fourProducts)
      return fourProducts // Retorna os produtos buscados
    })
    .catch((error) => {
      console.error('Erro ao obter produtos:', error)
      return [] // Retorna uma array vazia em caso de erro
    })
}
