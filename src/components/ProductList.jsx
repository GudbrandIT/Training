const products = [
  { title: "Wood", inPresence: false, id: 1 },
  { title: "Peat", inPresence: true, id: 2 },
  { title: "Crushed stone", inPresence: true, id: 3 },
];

export function ProductList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.inPresence ? "darkblue" : "crimson" }}
    >
      {product.title}
    </li>
  ));
  return <ul>{listItems}</ul>;
}
