import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Update from "./components/Update";
import Add from "./components/Add";
import Delete from "./components/Delete";
import Footer from "./components/Footer";

const App = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const [users, setUsers] = useState([]);
  const [users2, setUsers2] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((data) => setUsers(data.data.data))
      .then(
        axios
          .get("https://reqres.in/api/users?page=2")
          .then((data) => setUsers2(data.data.data))
      );
  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Users users={users} users2={users2} />
        </Route>
        <Route path="/add" exact>
          <Add config={config} />
        </Route>
        <Route path="/update" exact>
          <Update config={config} />
        </Route>
        <Route path="/delete" exact>
          <Delete config={config} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
