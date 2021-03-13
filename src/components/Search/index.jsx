import { Button, Input } from "components";

const Search = ({ onChange, onClick }) => {
  return (
    <div className="d-flex justify-content-center align-items-center search">
      <Input
        type="text"
        placeholder="Masukkan kata kunci"
        onChange={onChange}
        search
      />
      <Button label="Cari" search blue onClick={onClick} />
    </div>
  );
};

export default Search;
