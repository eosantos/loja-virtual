export async function fetchProducts(category) {
  return fetch(
    `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`,
  )
    .then((res) => res.json())
    .then((json) => {
      const sixProducts = json.slice(0, 6) // Captura apenas os 6 primeiros produtos
      console.log(sixProducts)
      return sixProducts // Retorna os produtos buscados
    })
    .catch((error) => {
      console.error('Erro ao obter produtos:', error)
      return [] // Retorna uma array vazia em caso de erro
    })
}
