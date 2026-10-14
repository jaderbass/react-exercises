function ProductCard({
  name,
  category,
  price,
  stock,
  featured,
  availableOnline
}) {
  const cardClassName =
    stock === 0
      ? "product-card product-card-out-of-stock"
      : "product-card";

  let stockMessage = "Nicht verfügbar";

  if (stock > 10) {
    stockMessage = "Gut verfügbar";
  } else if (stock > 0) {
    stockMessage = "Nur noch wenige verfügbar";
  }


  return (
    <article className={cardClassName}>
      {featured && (
        <p className="product-card-featured">
          Empfehlung
        </p>
      )}

      <h3>{name}</h3>

      <p>Kategorie: {category}</p>
      <p>Preis: {price} €</p>

      <p>
        {/* {stock > 0
          ? `${stock} Stück verfügbar`
          : "Nicht verfügbar"} */}
        {stockMessage}
      </p>

      <p>
        {availableOnline
          ? "Online erhältlich"
          : "Nur im Geschäft erhältlich"}
      </p>

      <button disabled={stock === 0}>
        In den Warenkorb
      </button>
    </article>
  );
}

export default ProductCard;
