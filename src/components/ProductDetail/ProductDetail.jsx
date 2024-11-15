// ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./ProductDetail.module.css"; // Ensure you have this CSS file

const ProductDetail = () => {
  const { id } = useParams(); // Access the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data by ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  // Render loading message or product details
  if (!product) return <p>Loading...</p>;

  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.detailsContainer}>
        <h1 className={styles.productTitle}>{product.title}</h1>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.priceAndRating}>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.productCategory}>Category: {product.category}</p>
          <p className={styles.productRating}>
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
        </div>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
