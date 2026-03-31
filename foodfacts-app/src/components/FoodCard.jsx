function FoodCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        width: "200px",
        borderRadius: "8px",
      }}
    >
      <img
        src={product.image_small_url || "https://via.placeholder.com/150"}
        alt={product.product_name}
        style={{ width: "100%", height: "120px", objectFit: "cover" }}
      />

      <h3>{product.product_name}</h3>
      <p><strong>Brand:</strong> {product.brands || "N/A"}</p>

      <p>Calories: {product?.nutriments?.["energy-kcal_100g"] || "N/A"}</p>
      <p>Protein: {product?.nutriments?.proteins_100g || "N/A"}g</p>
      <p>Carbs: {product?.nutriments?.carbohydrates_100g || "N/A"}g</p>
      <p>Fat: {product?.nutriments?.fat_100g || "N/A"}g</p>
    </div>
  );
}

export default FoodCard;