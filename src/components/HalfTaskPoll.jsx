import React from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";
import { Accordion } from "react-bootstrap";

const HalfTaskPoll = ({ header, data }) => {
  let specialStyle = "";
  if (header.toLowerCase() == "completed") {
    specialStyle = "line-through";
  }

  return (
    <div className="HalfTaskPoll ">
      <h2 className="header">{header}</h2>
      <TaskPoolHeader />
      <Accordion flush>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <Task
              style={specialStyle}
              taskHeader={""}
              urgencyNumber={""}
              duration={""}
            />
          </Accordion.Header>
          <Accordion.Body>{`taskBody`}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default HalfTaskPoll;
