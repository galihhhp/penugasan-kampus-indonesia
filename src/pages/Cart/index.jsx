import { useEffect } from "react";
import { ROUTES } from "configs/routes";
import { useHistory } from "react-router-dom";
import { Button, CartCard } from "components";

const Cart = () => {
  const history = useHistory();

  useEffect(() => (document.title = "Keranjang"));

  return (
    <div className="cart-page">
      <div className="container pt-5 cart-page-content">
        <div className="row mb-5 justify-content-center align-items-center">
          <div className="col-4">
            <Button
              label="Back"
              white
              onClick={() => history.push(ROUTES.HOMEPAGE)}
            />
          </div>
          <h1 className="col-8 text-white">Keranjang</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          <CartCard />
        </div>
      </div>
    </div>
  );
};

export default Cart;
