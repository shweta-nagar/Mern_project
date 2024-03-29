import { NavLink, Outlet } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


const AdminPage = () => {
  return (
    <>
      <ul className="list-container">
        <li className="list-item">
          <NavLink to="/admin/students">Users</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/admin/contacts">Contacts</NavLink>
        </li>
       
          <li
            class=" text-light  dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Services
          </li>
          <ul class="dropdown-menu">
            <li className="dropdown-item">
              <NavLink to="/admin/service">Add-Service</NavLink>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                
                <NavLink to="/admin/services/delete">Delete-service</NavLink>
              </a>
            </li>
          </ul>
     

        <li className="list-item">
          <NavLink to="/">Home</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default AdminPage;
