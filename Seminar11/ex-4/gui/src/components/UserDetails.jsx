import "./UserDetails.css";

const UserDetails = ({ user, onClear }) => {
  if (!user) {
    return (
      <div className="user-details empty">
        <h2>User Details</h2>
        <p>Selectează un utilizator din listă ca să vezi detaliile.</p>
      </div>
    );
  }

  return (
    <div className="user-details">
      <div className="header">
        <h2>User Details</h2>
        <button onClick={onClear}>Clear</button>
      </div>

      <p><b>ID:</b> {user.id}</p>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Type:</b> {user.type}</p>
    </div>
  );
};

export default UserDetails;
