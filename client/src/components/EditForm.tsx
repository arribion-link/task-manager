
const Login = () => {
  return (
    <div className="auth-container">
      <form action="" className="border border-blue-500 rounded p-4">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Description:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Due Date:</label>
          <input type="date" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
