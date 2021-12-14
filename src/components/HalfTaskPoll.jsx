import React from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { getUrgentToDos, getCompletedToDos } from "../services/todoServises";

const HalfTaskPoll = ({ header, data }) => {
  let specialStyle = "";
  if (header.toLowerCase() == "completed") {
    specialStyle = "line-through";
  }

  let [toDos, setToDos] = useState([]);

  useEffect(async () => {
    if (header == "completed") {
      const { data } = await getCompletedToDos();
      console.log(data);
      await setToDos(data);
    } else {
      const { data } = await getUrgentToDos();
      console.log(data);
      await setToDos(data);
    }
  }, []);

  return (
    <div className="HalfTaskPoll ">
      <h2 className="header">{header}</h2>
      <TaskPoolHeader />
      <Accordion flush>
        {toDos.map((todo) => {
          const date = new Date(Date.parse(todo.add_date));
          const date_formeted = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
          return (
            <Accordion.Item eventKey={todo.id} key={todo.id}>
              <Accordion.Header>
                <Task
                  style={specialStyle}
                  taskHeader={todo.task_header}
                  urgencyNumber={todo.urgency}
                  duration={todo.duration}
                />
              </Accordion.Header>
              <Accordion.Body>
                {
                  <div className="d-flex flex-column text-start">
                    <div>
                      <span className="miniTitle"> Add by:</span>
                      <span>
                        {todo.add_by} @ {date_formeted}
                      </span>
                    </div>
                    <div>
                      <p>
                        <span className="miniTitle"> Description:</span>
                        {todo.description}
                      </p>
                    </div>
                  </div>
                }
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default HalfTaskPoll;
