import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className='bg-white p-4 fixed w-full top-0'> 
      <Link to="/">
      <h1 className="font-bold">TASK MANAGER MERN STACK CRUD</h1>
      </Link>
    </div>
  )
}

export default Navbar
