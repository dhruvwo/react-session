import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./AuthRouts/Navbar";
import { useAuth } from "../../hooks/useAuth";

const AuthWrapper = () => {
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser);
  if (!currentUser) {
    <Navigate to="/login" />;
  }
  return (
    <div
      style={{
        height: "90vh",
        width: "90vw",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthWrapper;
