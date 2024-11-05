import React, { useEffect, useState } from "react";

import axios from "axios";
import UserCard from "./UserCard";



const UserList = () => {
  useEffect(() => {
    displayUsers();
  }, []); // Sans les crochets ça tourne en boucle

  const [Users, setUsers] = useState([]);

  const displayUsers = async () => {
    await axios.get("https://api.le-tatouage.fr/api/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
<div>
  <div className="row row-cols-1 row-cols-md-3 g-4 m-3 rounded-3 mt-4">
    {Users.map((user, index) => (
      user.role_id !== 2 && user.user_id >= 4 && <UserCard key={index} user={user} />
    ))}
  </div>
</div>
  );
};

export default UserList;
