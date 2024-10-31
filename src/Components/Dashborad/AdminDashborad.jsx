import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-4 md:p-10">
      <Header changeUser={props.changeUser} />
      <div className="mt-4 space-y-4">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
