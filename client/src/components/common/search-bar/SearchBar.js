import './SearchBar.css';

export const SearchBar = () => {
  return (
    <div className="search-container">
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Search..." />
        <button type="submit" className="search-button">
          <img
            className="search-icon"
            src="images/icon-search.png"
            alt="No Image"
          />
        </button>
      </form>
    </div>
  );
};
