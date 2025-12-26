import "./User.css";

const RegularUser = ({ user }) => {
  return (
    <div className="user-card regular">
      <h3> {user.name}</h3>
      <p>{user.email}</p>
      <small>Type: regular</small>
    </div>
  );
};

export default RegularUser;
