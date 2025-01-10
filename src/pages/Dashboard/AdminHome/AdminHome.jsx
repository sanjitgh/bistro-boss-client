import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div className="py-14">
      <h1 className="text-2xl font-semibold">
        Hi Welcome {user.displayName ? user.displayName : "Back"}
      </h1>
    </div>
  );
};

export default AdminHome;
