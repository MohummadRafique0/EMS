import React from "react";

const NewTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 flex-nowrap p-5 h-full w-full max-w-xs rounded-xl bg-blue-400">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-base px-4 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskdate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="bg-blue-500 rounded font-medium py-1 px-2 text-xs w-full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
