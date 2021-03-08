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
      <h3 className="ml-2 text-center">Daftar</h3>
      <Input
        name="email"
        label="Password"
        type="email"
        onChange={handleChange}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        onChange={handleChange}
      />
      <Input
        name="confirmPassword"
        type="confirmPassword"
        label="Password"
        onChange={handleChange}
      />
      <Button label="Daftar" blue onClick={handleRegistration} />
    </div>
  );
};

export default Registration;
