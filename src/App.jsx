import { useEffect, useState } from "react";

const users = [
  { firstName: "John", id: 1 },
  { firstName: "Emily", id: 2 },
  { firstName: "Michael", id: 3 },
  { firstName: "Sarah", id: 4 },
  { firstName: "David", id: 5 },
  { firstName: "Jessica", id: 6 },
  { firstName: "Daniel", id: 7 },
  { firstName: "Olivia", id: 8 },
  { firstName: "Matthew", id: 9 },
  { firstName: "Sophia", id: 10 },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredItem, setFilteredItem] = useState(users);
  const [apiUser, setApiUser] = useState([]);

  const handleSearchChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(input);

    const filteredNames = users.filter((user) =>
      user.firstName.toLowerCase().includes(input)
    );
    setFilteredItem(filteredNames);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setApiUser(data.users));
  }, []);

  console.log(apiUser);

  return (
    <div>
      <input
        type="search"
        placeholder="Type for Search"
        value={searchInput}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItem.length > 0 ? (
          filteredItem.map((item) => <li key={item.id}>{item.firstName}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
