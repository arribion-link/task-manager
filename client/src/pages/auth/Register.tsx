import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <form action="">
        <div className="form-group">
            <label htmlFor="email">Username:</label>
            <input type="text" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email"  />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" />
        </div>
            <button>Submit</button>
            <hr />
            <p>Have an account? <Link to="/auth/login">Sign in</Link></p>
      </form>
    </div>
  );
}

export default Login

