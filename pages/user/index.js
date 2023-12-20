import React from "react";
import userData from "./userdata.json";
import Layout from "@/layout";

const UserList = () => {
  return (
    <Layout>
      <div className="text-3xl font-bold underline flex flex-grow">
        User List
      </div>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <a href={`/user/${user.name}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default UserList;
