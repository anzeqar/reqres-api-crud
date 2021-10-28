import axios from "axios";
import React, { useState } from "react";

const Update = ({ config }) => {
  const [result, setResult] = useState([]);
  const updateUser = (e) => {
    setResult([]);
    e.preventDefault();
    const id = e.target[0].value;
    const name = e.target[1].value;
    const job = e.target[2].value;
    const data = {
      name,
      job,
    };
    axios
      .put(`https://reqres.in/api/users/${id}`, data, config)
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => setResult(err.data));
  };
  return (
    <div className="container">
      <h1 className="h3 text-center mt-2 pb-2">Update User</h1>
      <form onSubmit={updateUser}>
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            id="id"
            placeholder="Enter ID"
            required={true}
          />
        </div>
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
            <h4 className="text-center pb-2">Successfully Updated User</h4>
            <ul class="list-group">
              <li class="list-group-item">Name: {result.name}</li>
              <li class="list-group-item">Job: {result.job}</li>
              <li class="list-group-item">
                Updated At: {String(new Date(result.updatedAt))}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Update;
