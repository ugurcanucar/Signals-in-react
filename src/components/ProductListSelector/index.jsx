import { selectedProductList } from "../../signals/productSignals";

const ProductListSelector = () => {
  console.log("ProductListSelector Rendered");

  const productList = [
    {
      id: 1,
      name: "Chocolate",
    },
    {
      id: 2,
      name: "Cola",
    },
    {
      id: 3,
      name: "Gum",
    },
    {
      id: 4,
      name: "Other Cheap Product",
    },
    {
      id: 5,
      name: "Super Luxuary Sport Car",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold">Products</h2>
      {productList.map((product) => (
        <div key={product.id} className="flex gap-2">
          <input
            disabled={product.id === 5}
            onChange={(e) => {
              if (e.target.checked) {
                selectedProductList.value = [
                  ...selectedProductList.value,
                  product,
                ];
              } else {
                selectedProductList.value = selectedProductList.value.filter(
                  (x) => x.id !== product.id
                );
              }
            }}
            type="checkbox"
            id={product.id.toString()}
          />
          <label
            className={`${product.id === 5 ? "opacity-50" : ""}`}
            htmlFor={product.id.toString()}
          >
            {product.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductListSelector;
