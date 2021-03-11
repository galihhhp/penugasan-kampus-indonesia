import { Button, Input } from "components";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container newsletter-content">
        <div className="row">
          <div className="col d-flex flex-column text-center justify-content-center align-items-center text-white newsletter-main">
            <h4>
              Untuk mendapatkan informasi terupdate anda bisa berlangganan
              buletin kami
            </h4>
            <div className="my-3">
              <Input placeholder="Masukkan email" />
              <Button white label="Berlangganan" />
            </div>
            <p>Tidak akan spam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
