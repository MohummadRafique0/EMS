import React from "react";

const TaskNumber = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 w-full mt-10">
      <div className="rounded-xl w-full md:w-[45%] py-6 px-9 bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-medium">Complete Task</h3>
      </div>
      <div className="rounded-xl w-full md:w-[45%] py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
      <div className="rounded-xl w-full md:w-[45%] py-6 px-9 bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-full md:w-[45%] py-6 px-9 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
