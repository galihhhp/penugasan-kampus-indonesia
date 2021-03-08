import { Button, Input } from "components";
import { useState } from "react";

const Registration = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = input;

  const handleRegistration = () => {
    console.log(email, password, confirmPassword);
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="ml-2 text-center m-0">Daftar</h3>
      <Input
        name="email"
        label="Email"
        type="email"
        onChange={handleChange}
        placeholder="Masukkan email"
      />
      <Input
        name="password"
        label="Kata sandi"
        type="password"
        placeholder="Masukkan kata sandi"
        onChange={handleChange}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Masukkan konfirmasi kata sandi"
        label="Konfirmasi kata sandi"
        onChange={handleChange}
      />
      <div className="mt-3">
        <Button label="Daftar" blue block onClick={handleRegistration} />
      </div>
    </div>
  );
};

export default Registration;
