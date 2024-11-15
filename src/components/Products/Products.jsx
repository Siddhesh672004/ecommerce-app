import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products data from API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Render loading message or the list of products

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.productList}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <Link to={`/product/${product.id}`}>
                  {" "}
                  {/* Updated Link */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.productImage}
                  />
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
