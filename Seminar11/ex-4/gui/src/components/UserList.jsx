import User from "./User";
import "./UserList.css";

const UserList = ({ users, onSelect }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div key={user.id} onClick={() => onSelect(user)} style={{ cursor: "pointer" }}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
