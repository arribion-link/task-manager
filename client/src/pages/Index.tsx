import { Link } from "react-router-dom";
import react_icon from "../assets/react.svg"
const Index = () => {
  return (
    <section className="h-full w-full flex justify-center items-center pt-20">
      <div>
        <div className="flex justify-center">
          <img src={react_icon} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-5xl text-blue-600">
            {" "}
            Welcome to my task manager
          </h1>
          <div className="flex justify-center mt-8 gap-5">
            <Link to="/auth/login">
              <button className="text-center border-blue-500 border rounded-2xl p-2 min-w-3xs">
                Get started
              </button>
            </Link>
            <Link to="/home">
              <button className="text-center border-blue-500 border rounded-2xl p-2 min-w-3xs">
                Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Index
