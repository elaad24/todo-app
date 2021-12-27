import React, { useEffect, useState } from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";
import { Accordion } from "react-bootstrap";

import { getAllToDos, setTodoAsCompleted } from "../services/todoServises";

const TaskPoll = ({ header, data }) => {
  const setAsCompleted = async (id) => {
    await setTodoAsCompleted(id);
    window.location.reload();
  };

  return (
    <div className="taskPool ">
      <h2 className="header">{header}</h2>
      <TaskPoolHeader />
      <Accordion flush>
        {data.map((todo) => {
          const date = new Date(Date.parse(todo.add_date));
          const date_formeted = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
          return (
            <Accordion.Item eventKey={todo.id} key={todo.id}>
              <Accordion.Header>
                <Task
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
                    <hr />
                    <div className="d-flex justify-content-around">
                      <div>
                        <b> set as complete</b>
                      </div>
                      <div>
                        <button
                          className="btn btn-outline-success"
                          onClick={() => setAsCompleted(todo.id)}
                        >
                          <b> complted &#10003; </b>
                        </button>
                      </div>
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

export default TaskPoll;
