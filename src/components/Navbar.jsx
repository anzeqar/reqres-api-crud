import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">Reqres API CRUD</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mt-1 mb-1">
              <Link to={"/"} className="text-decoration-none pe-3">
                All Users
              </Link>
            </li>
            <li className="nav-item mt-1 mb-1">
              <Link to={"/add"} className="text-decoration-none pe-3">
                Add User
              </Link>
            </li>
            <li className="nav-item mt-1 mb-1">
              <Link to={"/update"} className="text-decoration-none pe-3">
                Update User
              </Link>
            </li>
            <li className="nav-item mt-1 mb-1">
              <Link to={"/delete"} className="text-decoration-none pe-3">
                Delete User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
