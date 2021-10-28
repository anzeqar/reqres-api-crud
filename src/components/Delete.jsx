import axios from "axios";
import React, { useState } from "react";

const Delete = ({ config }) => {
  const [result, setResult] = useState([]);
  const deleteUser = (e) => {
    setResult([]);
    e.preventDefault();
    const id = e.target[0].value;

    axios
      .delete(`https://reqres.in/api/users/${id}`, config)
      .then((res) => {
        if (res.status === 204) {
          setResult(true);
        }
      })
      .catch(() => setResult(false));
  };
  return (
    <div className="container">
      <h1 className="h3 text-center mt-2 pb-2">Delete User</h1>
      <form onSubmit={deleteUser}>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="id"
            placeholder="Enter ID"
            required={true}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
      <div className=" mt-4">
        {result.length <= 0 ? (
          ""
        ) : !result ? (
          <div>
            <ul className="list-group bg-danger text-light">
              <li className="list-group-item bg-danger text-light">
                Error: Cannot Delete User
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="list-group">
              <li className="list-group-item text-center">
                Successfully Deleted User
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Delete;
