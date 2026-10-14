import products from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

function ProductList() {
  return (
    <section>
      <h2>Produkte</h2>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
            stock={product.stock}
            featured={product.featured}
            availableOnline={
              product.availableOnline
            }
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
