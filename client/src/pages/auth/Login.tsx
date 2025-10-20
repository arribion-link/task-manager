import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-container">
      <form action="">
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" />
        </div>
        <div className="form-group">
            <label htmlFor="email">Password:</label>
            <input type="password" />
        </div>
            <button>Submit</button>
            <hr />
            <p>
            Don't have an account? <Link to="/auth/register">Create</Link>
            </p>
      </form>
    </div>
  );
}

export default Login
