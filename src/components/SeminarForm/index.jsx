import { Input, Button } from "components";

const SeminarForm = () => {
  return (
    <div className="container d-flex flex-column">
      <Input label="Nama" placeholder="Masukkan nama kamu" />
      <Input label="Email" type="email" placeholder="Masukkan email kamu" />
      <Input label="Nomor hp" type="number" placeholder="Masukkan nomor hp" />
      <Button blue label="Daftar Seminar" />
    </div>
  );
};

export default SeminarForm;
