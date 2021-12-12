import extreme from "../icons/extreme.png";
import critical from "../icons/critical.png";
import high from "../icons/high.png";
import medium from "../icons/medium.png";
import low from "../icons/low.png";

const Task = ({ taskHeader, urgencyNumber, duration, style }) => {
  let borderColor = "transparent";
  switch (urgencyNumber) {
    case 5:
      borderColor = "rgb(174,0,20)";
      break;
    case 4:
      borderColor = "rgb(255,0,30)";
      break;
    case 3:
      borderColor = "rgb(255,211,0)";
      break;
    case 2:
      borderColor = "rgb(26,80,201)";
      break;
    case 1:
      borderColor = "rgb(0,187,106)";
      break;
  }
  return (
    <div
      className="task"
      style={{ borderColor: `${borderColor}`, textDecoration: style }}
    >
      <div>some text enter hear</div>
      <div>
        <img width="110px" src={extreme} alt="extrene" />
      </div>
      <div>15 min</div>
    </div>
  );
};

export default Task;
