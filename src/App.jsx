import "./App.css";

// components
import TaskPoll from "./components/TaskPoll";
import HalfTaskPoll from "./components/HalfTaskPoll";

function App() {
  return (
    <div className="App ">
      <TaskPoll header={"all tasks"} data={""} />
      <div className="double_stack ">
        <HalfTaskPoll header={"most urgent"} data={""} />
        <HalfTaskPoll header={"completed"} data={""} />
      </div>
      <div>
        <button>add new one</button>
      </div>
    </div>
  );
}

export default App;
