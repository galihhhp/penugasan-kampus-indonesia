import { Button, Input, Alert } from "components";
import { useState } from "react";
import { useAuth } from "Context/AuthContext";

const Registration = () => {
  const { registerEmailPassword } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = input;

  const handleRegistration = async () => {
    try {
      if (password !== confirmPassword) {
        throw new Error("Your password not match").toString();
      }

      await registerEmailPassword(email, password);
      setSuccess("Successfully registered");
      console.log(email, password, confirmPassword);
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  return (
    <div className="d-flex flex-column">
      <h3 className="ml-2 text-center m-0">Daftar</h3>
      {error && <Alert type="danger" label={error} />}
      {success && <Alert type="success" label={success} />}
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
