import FoodCard from "./FoodCard";

function FoodList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {products.map((p) => (
        <FoodCard key={p.code} product={p} />
      ))}
    </div>
  );
}

export default FoodList;