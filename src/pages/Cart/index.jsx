import { useEffect } from "react";
import { CartCard } from "components";

const Cart = () => {
  useEffect(() => (document.title = "Keranjang"));

  return (
    <div className="cart-page">
      <div className="container pt-5 cart-page-content">
        <div className="row justify-content-center align-items-center">
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
