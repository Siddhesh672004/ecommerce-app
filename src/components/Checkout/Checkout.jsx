import { useState } from "react";
import { useCart } from "./CartContext"; // Import CartContext
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  const { cart } = useCart(); // Access cart items
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      alert("Order has been placed successfully!");
      setOrderPlaced(false);
    }, 3000);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.checkoutContainer}>
      <h1>Checkout</h1>
      <div className={styles.orderSummary}>
        <h2>Order Summary</h2>
        <div className={styles.items}>
          {cart.map((item, index) => (
            <div className={styles.item} key={index}>
              <p>{item.title}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className={styles.total}>
          <h3>Total</h3>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button
          className={styles.placeOrderButton}
          onClick={handlePlaceOrder}
          disabled={orderPlaced}
        >
          Place Order
        </button>
      </div>
      {orderPlaced && <div className={styles.orderAnimation}>Order Placed!</div>}
    </div>
  );
};

export default CheckoutPage;
