import { useState } from "react";
import SearchBar from "./components/SearchBar";
import FoodList from "./components/FoodList";

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
          query
        )}&json=true`
      );

      const data = await res.json();

      const filtered = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== ""
      );

      setResults(filtered);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>FoodFacts 🍎</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <p>Search for a food to see nutrition info.</p>
      )}

      {!loading && results.length > 0 && <FoodList products={results} />}
    </div>
  );
}

export default App;