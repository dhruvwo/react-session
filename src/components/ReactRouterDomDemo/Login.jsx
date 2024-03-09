import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          loginUser({
            id: 123,
            name: "Dhruv",
          });
        }}
      >
        Login Now
      </button>
      <p>Login information goes here...</p>
    </div>
  );
};

export default Login;
