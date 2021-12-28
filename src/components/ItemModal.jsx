import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { saveNewTodo } from "../redux/slice/todoSlice";
import { addNewTodo, updateTodo } from "../services/todoServises";

const ItemModal = ({ modalData, submitAction, ModalState, btnTxt }) => {
  const [show, setShow] = useState(ModalState);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let btnColor = "";
  if (submitAction === "add") {
    btnColor = "primary";
  } else if (submitAction === "edit") {
    btnColor = "outline-warning";
  }

  const idRef = useRef(modalData.id);
  const titleRef = useRef(modalData.task_header);
  const urgencyRef = useRef(modalData.urgency);
  const durationRef = useRef(modalData.duration);
  const completedRef = useRef(modalData.completed);
  const descriptionRef = useRef(modalData.description);
  const addByRef = useRef(modalData.add_by);
  const addDateRef = useRef(modalData.add_date);
  const completedAtRef = useRef(modalData.completedAt);

  let [tittleError, setTittleError] = useState("");
  let [urgencyError, setUrgencyError] = useState("");
  let [durationError, setdurationError] = useState("");
  let [descriptionError, setDescriptionError] = useState("");
  let [addByError, setAddByError] = useState("");
  // represent if one of the values HAVE error init
  let [valueError, setValueError] = useState(false);

  const dispatch = useDispatch();

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
    const task = {
      id: modalData.id ? modalData.id : undefined,
      title: titleRef?.current?.value,
      urgency: urgencyRef?.current?.value,
      duration: durationRef?.current?.value,
      completed: completedRef?.current?.value
        ? completedRef?.current?.value
        : 0,
      description: descriptionRef?.current?.value,
      addBy: addByRef?.current?.value,
      addDate: Date.parse(modalData.add_date),
      completedAt: completedAtRef?.current?.value
        ? completedAtRef?.current?.value
        : null,
    };

    valueChecker();
    if (valueError) {
      alert(valueError);
      // error doesnot work
      // need to do something need to think about it
    } else {
      e.preventDefault();
      if (submitAction === "add") {
        await addNewTodo(task);
        handleClose();
        dispatch(saveNewTodo(task));
      } else if (submitAction === "edit") {
        await updateTodo(task);
        window.location.reload();
      }
    }
  };

  return (
    <>
      <Button variant={btnColor} onClick={handleShow}>
        {btnTxt}
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
                  modalData.task_header === "" ? "" : modalData.task_header
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
                defaultValue={modalData.urgency === "" ? "" : modalData.urgency}
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
                  modalData.duration === "" ? "" : modalData.duration
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
                  modalData.description === "" ? "" : modalData.description
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
                defaultValue={modalData.add_by === "" ? "" : modalData.add_by}
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
