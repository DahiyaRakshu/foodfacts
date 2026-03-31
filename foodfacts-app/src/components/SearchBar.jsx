import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />
      <button type="submit" style={{ marginLeft: "10px", padding: "8px" }}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;