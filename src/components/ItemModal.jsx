import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { addNewTodo, updateTodo } from "../services/todoServises";

const ItemModal = ({
  id,
  title,
  urgency,
  duration,
  completed,
  description,
  addBy,
  addDate,
  completedAt,
  submitAction,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const idRef = useRef(id);
  const titleRef = useRef(title);
  const urgencyRef = useRef(urgency);
  const durationRef = useRef(duration);
  const completedRef = useRef(completed);
  const descriptionRef = useRef(description);
  const addByRef = useRef(addBy);
  const addDateRef = useRef(addDate);
  const completedAtRef = useRef(completedAt);

  let [tittleError, setTittleError] = useState("");
  let [urgencyError, setUrgencyError] = useState("");
  let [durationError, setdurationError] = useState("");
  let [descriptionError, setDescriptionError] = useState("");
  let [addByError, setAddByError] = useState("");
  // represent if one of the values HAVE error init
  let [valueError, setValueError] = useState(false);

  // function that check if all the value is valid
  const valueChecker = () => {
    setValueError(false);
    setTittleError("");
    setUrgencyError("");
    setdurationError("");
    setDescriptionError("");
    setAddByError("");
    if (
      typeof titleRef.current.value != "string" ||
      titleRef.current.value.length <= 2 ||
      titleRef.current.value.length >= 255
    ) {
      setTittleError("title must be string and between 3 and 254 cher long");
      setValueError(true);
    }
    if (
      typeof urgencyRef.current.value != "number" ||
      urgencyRef.current.value <= 0 ||
      urgencyRef.current.value >= 6
    ) {
      setUrgencyError("urgency must be number  between 1 and 5");
      setValueError(true);
    }

    if (
      typeof durationRef.current.value != "number" ||
      durationRef.current.value <= 0 ||
      durationRef.current.value >= 9999999
    ) {
      setdurationError("duration  must be number  between 1 and 100000");
      setValueError(true);
    }

    if (
      typeof descriptionRef.current.value != "string" ||
      descriptionRef.current.value.length <= 2 ||
      descriptionRef.current.value.length >= 65000
    ) {
      setDescriptionError(
        "description must be string and between 3 and 65000 cher long"
      );
      setValueError(true);
    }

    if (
      typeof addByRef.current.value != "string" ||
      addByRef.current.value.length <= 2 ||
      addByRef.current.value.length >= 255
    ) {
      setAddByError("add By must be string and between 3 and 254 cher long");
      setValueError(true);
    }
  };

  const handleSubmit = async (e) => {
    console.log(e);
    console.log("FFFFFFFFFFFFFFFFFFF");
    console.log(titleRef.current.value);
    console.log(urgencyRef.current.value);
    console.log(durationRef.current.value);
    console.log(completedRef?.current?.value);
    console.log(descriptionRef.current.value);
    console.log(addByRef.current.value);
    console.log(addDateRef?.current?.value);
    console.log(completedAtRef?.current?.value);

    const task = {
      id: idRef?.current,
      title: titleRef?.current?.value,
      urgency: urgencyRef?.current?.value,
      duration: durationRef?.current?.value,
      completed: completedRef?.current?.value,
      description: descriptionRef?.current?.value,
      addBy: addByRef?.current?.value,
      addDate: addDateRef?.current?.value,
      completedAt: completedAtRef?.current?.value,
    };

    valueChecker();
    if (valueError) {
      alert(valueError);
      // error doesnot work
      // need to do something need to think about it
    } else {
      setTittleError("");
      setUrgencyError("");
      setdurationError("");
      setDescriptionError("");
      setAddByError("");
      e.preventDefault();
      if (submitAction === "add") {
        await addNewTodo(task);
        window.location.reload();
      } else if (submitAction === "edit") {
        await updateTodo(task);
      }
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add new todo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex text-center">add new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>{"Title"}</Form.Label>
              <Form.Control
                className="placeholder-danger"
                type="text"
                defaultValue={
                  titleRef.current?.value === ""
                    ? titleRef.current?.value
                    : titleRef.current
                }
                ref={titleRef}
                minLength="3"
                placeholder={tittleError}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                {"Urgency"}
                <span>
                  <small className="text-danger">
                    {" 1-low priority, 5-top priority "}
                  </small>
                </span>
              </Form.Label>
              <Form.Control
                className="placeholder-danger"
                type="number"
                defaultValue={
                  urgencyRef.current?.value === ""
                    ? urgencyRef.current?.value
                    : urgencyRef.current
                }
                ref={urgencyRef}
                min="1"
                max="5"
                placeholder={urgencyError}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{"Duration"}</Form.Label>
              <Form.Control
                className="placeholder-danger"
                type="number"
                defaultValue={
                  durationRef.current?.value === ""
                    ? durationRef.current?.value
                    : durationRef.current
                }
                ref={durationRef}
                min="0"
                max="9999999"
                placeholder={durationError}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{"Description"}</Form.Label>
              <Form.Control
                className="placeholder-danger"
                type="text"
                defaultValue={
                  descriptionRef.current?.value === ""
                    ? descriptionRef.current?.value
                    : descriptionRef.current
                }
                ref={descriptionRef}
                minLength="3"
                maxLength="65000"
                placeholder={descriptionError}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{"Add By"}</Form.Label>
              <Form.Control
                className="placeholder-danger"
                type="text"
                defaultValue={
                  addByRef.current?.value === ""
                    ? addByRef.current?.value
                    : addByRef.current
                }
                ref={addByRef}
                minLength="2"
                placeholder={addByError}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemModal;
