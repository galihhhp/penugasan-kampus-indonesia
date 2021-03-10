import { Button, Input, Alert } from "components";
import { useState } from "react";
import { useAuth } from "Context/AuthContext";

const Login = () => {
  const { loginEmailPassword, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { email, password } = input;

  const handleLogin = async () => {
    try {
      await loginEmailPassword(email, password);
      console.log(email, password);
    } catch (error) {
      setError(error);
    }
  };

  const handleGoogle = async () => {
    try {
      loginWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="ml-2 text-center m-0">Masuk</h3>
      {error && <Alert type="danger" label={error} />}
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
        <Button label="google" type="danger" block onClick={handleGoogle} />
      </div>
    </div>
  );
};

export default Login;
