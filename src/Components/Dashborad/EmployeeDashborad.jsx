import React from "react";
import Header from "../Other/Header";
import TaskNumber from "../Other/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-4 md:p-10 bg-gray-900 h-screen w-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <div className="mt-4 space-y-4">
        <TaskNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
