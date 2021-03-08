import { Button, Input } from "components";
import { useState } from "react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  const handleLogin = () => {
    console.log(email, password);
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="ml-2 text-center">Masuk</h3>
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
      <Button label="Masuk" blue onClick={handleLogin} />
    </div>
  );
};

export default Login;
