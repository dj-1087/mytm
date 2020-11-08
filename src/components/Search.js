import React from "react";

const Search = () => {
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      <input type="text" placeholder="키워드" />
      <input type="submit" value="검색" onClick={onClick} />
    </form>
  );
};

export default Search;
