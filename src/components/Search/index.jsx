import { Button, Input } from "components";

const Search = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5 search">
      <Input type="text" placeholder="Masukkan kata kunci" search />
      <Button label="Cari" search blue />
    </div>
  );
};

export default Search;
