import { Link } from "react-router-dom";
const Index = () => {
  return (
      <section className="h-full w-full flex justify-center items-center pt-20">
          <div>
              <h1 className="font-bold text-5xl text-blue-600"> Welcome to my task manager</h1>
              <Link to="/auth/login">
                <button className="text-center border-blue-500 border rounded-2xl p-2 min-w-3xs">Get started</button>
              </Link>
          </div>
    </section>
  );
}

export default Index
