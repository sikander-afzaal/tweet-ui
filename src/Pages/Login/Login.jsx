import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <h1>Trend Hacker</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/tweet");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
