import React from "react";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/addUser">Add User</Link>
      <Link to="/showUsers">Show Users</Link>
    </div>
  );
}

export default Home;