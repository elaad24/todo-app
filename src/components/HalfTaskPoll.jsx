import React from "react";
import Task from "./Task";
import TaskPoolHeader from "./TaskPoolHeader";
import { Accordion } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import {
  setTodoAsCompleted,
  setTodoAsUnCompleted,
  deleteTodo,
  updateTodo,
} from "../services/todoServises";
import ItemModal from "./ItemModal";

/* pancil code U+270E  */

const HalfTaskPoll = ({ header, data }) => {
  let specialStyle = "";
  if (header.toLowerCase() == "completed") {
    specialStyle = "line-through";
  }

  const [editModalData, setEditModalData] = useState({});

  // task that detarmin by if the task is complited or not
  const Assignment = async (id) => {
    if (header == "completed") {
      await setTodoAsUnCompleted(id);
      window.location.reload();
    } else {
      await setTodoAsCompleted(id);
      window.location.reload();
    }
  };

  // task that detarmin by if the task is complited or not
  const extraAssignment = async (todoData) => {
    if (header == "completed") {
      await deleteTodo(todoData.id);
      window.location.reload();
    } else {
      setEditModalData(todoData);
    }
  };

  return (
    <div className="HalfTaskPoll ">
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
                    <hr />
                    <div className="d-flex justify-content-around">
                      <div>
                        <b>
                          {header == "completed" ? (
                            <span> set as uncomplted</span>
                          ) : (
                            <span> set as complete</span>
                          )}
                        </b>
                      </div>
                      <div>
                        <button
                          className={
                            header == "completed"
                              ? "btn btn-outline-danger"
                              : "btn btn-outline-success"
                          }
                          onClick={() => Assignment(todo.id)}
                        >
                          <b>
                            {header == "completed" ? (
                              <span> uncomplted &#10007;</span>
                            ) : (
                              <span> complted &#10003;</span>
                            )}
                          </b>
                        </button>
                      </div>
                      <div>
                        <button
                          className={
                            header == "completed"
                              ? "btn btn-outline-danger"
                              : "btn"
                          }
                          onClick={() => extraAssignment(todo)}
                        >
                          <b>
                            {header == "completed" ? (
                              <span> delete &#x1f5d1; </span>
                            ) : (
                              <ItemModal
                                btnTxt={"edit"}
                                submitAction={"edit"}
                                modalData={editModalData}
                              />
                              //{ <span> edit  &#9998;</span> }
                            )}
                          </b>
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

export default HalfTaskPoll;
