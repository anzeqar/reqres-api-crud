import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span className="navbar-brand">Reqres API CRUD</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to={"/"} className="text-decoration-none pe-3">
                All Users
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/add"} className="text-decoration-none pe-3">
                Add User
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/update"} className="text-decoration-none pe-3">
                Update User
              </Link>
            </li>
            <li class="nav-item">
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
