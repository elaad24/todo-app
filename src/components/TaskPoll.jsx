import React from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";

const TaskPoll = ({ header, data }) => {
  return (
    <div className="taskPool ">
      <h2 className="header">{header}</h2>
      <TaskPoolHeader />
      <Task />
    </div>
  );
};

export default TaskPoll;
