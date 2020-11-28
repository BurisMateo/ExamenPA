const apiUrl = "https://api.mercadolibre.com/";

async function buscarProducto(query) {
  const endPoint = `sites/MLA/search?q=${query}`;
  let response = await fetch(apiUrl + endPoint);
  response = await response.json();

  let productos = [];

  response.results.forEach((result) => productos.push(result));

  return productos;
}