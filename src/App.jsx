import "./App.css";

// components
import TaskPoll from "./components/TaskPoll";
import HalfTaskPoll from "./components/HalfTaskPoll";
import ItemModal from "./components/ItemModal";
import { useState } from "react";

function App() {
  const [modalState, setModalState] = useState(false);
  return (
    <>
      <div className="App ">
        <TaskPoll header={"all tasks"} data={""} />
        <div className="double_stack ">
          <HalfTaskPoll header={"most urgent"} data={""} />
          <HalfTaskPoll header={"completed"} data={""} />
        </div>
        <div>
          <ItemModal setModalState={setModalState} />
        </div>
      </div>
    </>
  );
}

export default App;
