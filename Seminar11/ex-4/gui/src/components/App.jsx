import UserList from "./UserList";
import UserForm from "./UserForm";
import UserDetails from "./UserDetails";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = (user) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => setUsers([...users, data]));
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const clearSelectedUser = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <h1>User Management</h1>

      <UserForm onAdd={addUser} />

      <UserDetails user={selectedUser} onClear={clearSelectedUser} />

      <UserList users={users} onSelect={handleSelectUser} />
    </div>
  );
}

export default App;
