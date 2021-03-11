import { Button, Input, Alert } from "components";
import { useState } from "react";

const Newsletter = () => {
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <div className="newsletter">
      <div className="container newsletter-content">
        <div className="row">
          <div className="col d-flex flex-column text-center justify-content-center align-items-center text-white mt-3 newsletter-main">
            <h4>
              Untuk mendapatkan informasi terupdate anda bisa berlangganan
              buletin kami
            </h4>
            {success && <Alert type="success" label={success} />}
            <div className="my-3">
              <Input
                placeholder="Masukkan email"
                type="email"
                onChange={(e) => setInput(e.target.value)}
              />
              <Button
                white
                label="Berlangganan"
                onClick={() =>
                  setSuccess(
                    `${input}, anda telah terdaftar berlangganan buletin kami`
                  )
                }
              />
            </div>
            <p>Tidak akan spam</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
