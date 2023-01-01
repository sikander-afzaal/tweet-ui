import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Trend Hacker</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
};

export default Login;
