import axios from "axios";
import React, { useState } from "react";

const Add = ({ config }) => {
  const [result, setResult] = useState([]);
  const addUser = (e) => {
    setResult([]);
    e.preventDefault();
    const name = e.target[0].value;
    const job = e.target[1].value;
    const data = {
      name,
      job,
    };
    axios.post("https://reqres.in/api/users", data, config).then((res) => {
      setResult(res.data);
    });
  };
  return (
    <div className="container">
      <h1 className="h3 text-center mt-2 pb-2">Add User</h1>
      <form onSubmit={addUser}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name"
            required={true}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="job"
            placeholder="Enter Job"
            required={true}
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">
          Submit
        </button>
      </form>
      <div className=" mt-4">
        {result.length <= 0 ? (
          ""
        ) : result["error"] ? (
          <div>
            <h4 className="text-center">Ooops... Error</h4>
            <ul class="list-group bg-danger text-light">
              <li class="list-group-item bg-danger text-light">
                Error: {result.error}
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <h4 className="text-center pb-2">Successfully Added User</h4>
            <ul class="list-group">
              <li class="list-group-item">ID: {result.id}</li>
              <li class="list-group-item">Name: {result.name}</li>
              <li class="list-group-item">Job: {result.job}</li>
              <li class="list-group-item">
                Created At: {String(new Date(result.createdAt))}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Add;
