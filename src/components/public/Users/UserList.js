import React, { useEffect, useState } from "react";

import axios from "axios";
import UserCard from "./UserCard";



const UserList = () => {
  useEffect(() => {
    displayUsers();
  }, []); // Sans les crochets ça tourne en boucle

  const [Users, setUsers] = useState([]);

  const displayUsers = async () => {
    await axios.get("http://127.0.0.1:8000/api/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <div>

      <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
        {Users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;