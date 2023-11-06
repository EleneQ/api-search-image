import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    /* 
      so that the form doesn't try to make a 
      network request adn refresh the page
    */
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  /* 
    using a form because, with a form, we can 
    easily detect when the user clicks the enter
    key

    value attribute is used so that the input has
    only one source of truth and is completely
    controlled by react state, not the browser.
  */
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
