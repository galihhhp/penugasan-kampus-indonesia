const CartCard = () => {
  return (
    <div className="row m-3 cart-card">
      <div className="col-6 justify-content-center d-flex flex-column">
        <h5>Judul</h5>
        <p className="m-0">nama</p>
      </div>
      <div className="col-6 justify-content-center text-right d-flex flex-column">
        <h4>harga</h4>
      </div>
    </div>
  );
};

export default CartCard;
