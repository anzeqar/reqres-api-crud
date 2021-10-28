const Users = ({ users, users2 }) => {
  return (
    <div className="container">
      <h1 className="h3 text-center mt-2 pb-2">All Users</h1>
      <ul>
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <div className="d-flex flex-row align-items-center">
              <img
                src={user.avatar}
                className=" img-thumbnail"
                alt="img-not-found"
              ></img>
              <div className="d-flex flex-column ps-4">
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>
                  Email: <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                </p>
              </div>
            </div>
          </li>
        ))}
        {users2.map((user) => (
          <li className="list-group-item" key={user.id}>
            <div className="d-flex flex-row align-items-center">
              <img
                src={user.avatar}
                className=" img-thumbnail"
                alt="img-not-found"
              ></img>
              <div className="d-flex flex-column ps-4">
                <p>First Name: {user.first_name}</p>
                <p>Last Name: {user.last_name}</p>
                <p>
                  Email: <a href={`mailto:${user.email}`}>{user.email}</a>{" "}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
