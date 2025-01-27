import Product from "./Product";
import useProducts from "../store/useProducts";
import "../styles/product.css";

const Products = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div id="product-container">
      {products.map((product) => {
        return <Product product={product} key={product.name} />;
      })}
    </div>
  );
};

export default Products;
