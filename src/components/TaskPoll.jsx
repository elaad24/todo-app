import React from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";
import { Accordion } from "react-bootstrap";

const TaskPoll = ({ header, data }) => {
  return (
    <div className="taskPool ">
      <h2 className="header">{header}</h2>
      <TaskPoolHeader />
      <Accordion flush>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <Task taskHeader={""} urgencyNumber={""} duration={""} />
          </Accordion.Header>
          <Accordion.Body>{`taskBody`}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default TaskPoll;
