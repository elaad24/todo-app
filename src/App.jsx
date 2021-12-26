import "./App.css";

// components
import TaskPoll from "./components/TaskPoll";
import HalfTaskPoll from "./components/HalfTaskPoll";
import ItemModal from "./components/ItemModal";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveAllTodos } from "./redux/slice/todoSlice";
import {
  getAllToDos,
  getCompletedToDos,
  getUrgentToDos,
} from "./services/todoServises";

function App() {
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState({});
  const [allTodosData, setallTodosData] = useState([]);
  const [urgentTodosData, setUrgentTodosData] = useState([]);
  const [completedTodosData, setCompletedTodosData] = useState([]);
  const [redux, setRedux] = useState({
    allTodos: {},
    urgents: {},
    complited: {},
  });

  const dispatch = useDispatch();

  useEffect(async () => {
    // get all the data in the same time by witing for all of them
    const allPromises = await Promise.all([
      getAllToDos(),
      getUrgentToDos(),
      getCompletedToDos(),
    ]);
    console.log(allPromises);
    setRedux({
      allTodos: allPromises[0].data,
      urgents: allPromises[1].data,
      complited: allPromises[2].data,
    });
    // save data in states
    setallTodosData(allPromises[0].data);
    setUrgentTodosData(allPromises[1].data);
    setCompletedTodosData(allPromises[2].data);
    // save in redux the data
    dispatch(
      saveAllTodos({
        allTodos: allPromises[0].data,
        urgents: allPromises[1].data,
        complited: allPromises[2].data,
      })
    );
  }, []);

  return (
    <>
      <div className="App ">
        <TaskPoll header={"all tasks"} data={allTodosData} />
        <div className="double_stack ">
          <HalfTaskPoll
            header={"most urgent"}
            data={urgentTodosData}
            setModalData={setModalData}
            setModalState={setModalState}
          />
          <HalfTaskPoll header={"completed"} data={completedTodosData} />
        </div>
        <div>
          <ItemModal
            btnTxt={"add new ToDo"}
            ModalState={modalState}
            submitAction={"add"}
            modalData={modalData}
          />
        </div>
      </div>
    </>
  );
}

export default App;
