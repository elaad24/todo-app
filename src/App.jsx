import "./App.css";

// components
import TaskPoll from "./components/TaskPoll";

function App() {
  return (
    <div className="App ">
      <TaskPoll header={"all tasks"} data={""} />
      <TaskPoll header={"most urgent"} data={""} />
      <div>
        <button>add new one</button>
      </div>
    </div>
  );
}

export default App;
