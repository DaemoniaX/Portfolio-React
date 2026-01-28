import "../css/SearchInput.css";

function SearchInput({ value, onChange }) {


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Search for panels..."
        className="search-input"
        value={value} //on met la migration de value
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;