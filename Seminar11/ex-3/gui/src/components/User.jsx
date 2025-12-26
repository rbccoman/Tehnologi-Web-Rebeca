import AdminUser from "./AdminUser";
import RegularUser from "./RegularUser";

const User = ({ user }) => {
  if (user.type === "admin") {
    return <AdminUser user={user} />;
  }
  return <RegularUser user={user} />;
};

export default User;
