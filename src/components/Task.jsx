import extreme from "../icons/extreme.png";
import critical from "../icons/critical.png";
import high from "../icons/high.png";
import medium from "../icons/medium.png";
import low from "../icons/low.png";

const Task = () => {
  return (
    <div className="task">
      <div>some text enter hear</div>
      <div>
        <img width="110px" src={extreme} alt="extrene" />
      </div>
      <div>15 min</div>

      <button className="btn btn-primary">btn</button>
    </div>
  );
};

export default Task;
