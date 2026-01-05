const Cart = () => {
  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>

      <div className="cart-container">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="cart-item">
            <div className="item-info">
              <h3>Veg Burger</h3>
              <p>₹149</p>
            </div>
            <span className="item-qty">Qty: 1</span>
          </div>

          <div className="cart-item">
            <div className="item-info">
              <h3>French Fries</h3>
              <p>₹99</p>
            </div>
            <span className="item-qty">Qty: 2</span>
          </div>

          <div className="cart-item">
            <div className="item-info">
              <h3>Cold Coffee</h3>
              <p>₹129</p>
            </div>
            <span className="item-qty">Qty: 1</span>
          </div>
        </div>

        {/* Price Summary */}
        <div className="cart-summary">
          <h2>Price Details</h2>

          <div className="summary-row">
            <span>Items Total</span>
            <span>₹476</span>
          </div>

          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>₹40</span>
          </div>

          <div className="summary-row total">
            <span>Total Amount</span>
            <span>₹516</span>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

