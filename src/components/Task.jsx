import extreme from "../icons/extreme.png";
import critical from "../icons/critical.png";
import high from "../icons/high.png";
import medium from "../icons/medium.png";
import low from "../icons/low.png";

const Task = ({ taskHeader, urgencyNumber, duration, style }) => {
  let borderColor = "transparent";
  let urgencyImage = "";

  switch (urgencyNumber) {
    case 5:
      borderColor = "rgb(174,0,20)";
      urgencyImage = extreme;
      break;
    case 4:
      borderColor = "rgb(255,0,30)";
      urgencyImage = critical;
      break;
    case 3:
      borderColor = "rgb(255,211,0)";
      urgencyImage = high;
      break;
    case 2:
      borderColor = "rgb(26,80,201)";
      urgencyImage = medium;
      break;
    case 1:
      borderColor = "rgb(0,187,106)";
      urgencyImage = low;
      break;
    default:
      borderColor = "rgb(0,187,106)";
      urgencyImage = low;
      break;
  }
  return (
    <div
      className="task"
      style={{ borderColor: `${borderColor}`, textDecoration: style }}
    >
      <div className="taskHeader">{taskHeader}</div>
      <div>
        <img className="urgencyIMG" src={urgencyImage} alt="{urgencyImage}" />
      </div>
      <div>{duration} min</div>
    </div>
  );
};

export default Task;
