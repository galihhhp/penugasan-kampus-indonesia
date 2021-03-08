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
      <h3 className="ml-2 text-center m-0">Masuk</h3>
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
      <div className="mt-3">
        <Button label="Masuk" blue block onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
