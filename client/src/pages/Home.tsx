import TaskCard from "../components/TaskCard"
import EditForm from "../components/EditForm";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="flex justify-between p-4 gap-20">
      <div>
        <div className="flex items-center justify-between py-12">
          <Link to="/">Go back</Link>
          <div>
            <form action="search" className="border border-indigo-500 rounded">
              <input type="search" placeholder="Search for task..." className="w-full border:focus-none" />
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div> 
      <div className="bg-white right-0 min-h-full p-4 fixed top-0">
        <EditForm />
      </div>
    </section>
  );
}

export default Home
