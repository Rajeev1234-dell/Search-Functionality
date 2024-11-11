import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    console.log(searchInput);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Type for Search"
        value={searchInput}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default App;
