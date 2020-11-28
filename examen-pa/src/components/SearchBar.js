import React, { useState } from "react";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.setTitle(query);
  }
  return (
    <div>
      <div class="col d-flex justify-content-center">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline" onSubmit={handleSubmit}>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </nav>
      </div>
    </div>
  );
};

export default SearchBar;