import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Catalogo from "./components/Catalogo";
import buscarProducto from "./Api";
function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState([]);

  async function obtenerProductos(query) {
    let response = await buscarProducto(query);
    setProducts(response);
  }

  useEffect(() => {
    obtenerProductos(query);
  }, [query]);

  return (
    <div className="App">
      <SearchBar setTitle={setQuery} />
      <Catalogo productos={products} />
    </div>
  );
}

export default App;