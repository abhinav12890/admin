import "./users.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

const Users = () => {
  return (
    <div className='users'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable head={"Add New User"}/>
      </div>
    </div>
  )
}

export default Users
