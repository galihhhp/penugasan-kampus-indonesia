import { Input, Button, Alert } from "components";
import { useState } from "react";
import { useDatabase } from "Context/DatabaseContext";
import { useAuth } from "Context/AuthContext";

const SeminarForm = ({ data }) => {
  const { addToCart } = useDatabase();
  const { currentUser } = useAuth();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { id, biaya, judul } = data;

  const handleSubmit = async () => {
    try {
      await addToCart({
        name: nameInput,
        email: emailInput,
        phone: phoneInput,
        userId: currentUser.uid,
        id,
        price: biaya,
        title: judul,
      });

      setSuccess("Successfully Added to Cart");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container d-flex flex-column">
      {!currentUser && (
        <Alert type="danger" label="Mohon untuk masuk terlebih dahulu" />
      )}
      {error && <Alert type="danger" label={error} />}
      {success && <Alert type="success" label={success} />}
      <Input
        label="Nama"
        placeholder="Masukkan nama kamu"
        name="nama"
        onChange={(e) => setNameInput(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="Masukkan email kamu"
        name="email"
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <Input
        label="Nomor hp"
        type="number"
        placeholder="Masukkan nomor hp"
        name="number"
        onChange={(e) => setPhoneInput(e.target.value)}
      />
      <div className="mt-3">
        <Button label="Daftar" blue block onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SeminarForm;
