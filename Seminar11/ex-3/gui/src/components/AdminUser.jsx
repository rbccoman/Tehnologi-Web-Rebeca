import "./User.css";

const AdminUser = ({ user }) => {
  return (
    <div className="user-card admin">
      <h3> {user.name}</h3>
      <p>{user.email}</p>
      <small>Type: admin</small>
    </div>
  );
};

export default AdminUser;
