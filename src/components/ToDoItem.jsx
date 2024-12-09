import { useState } from "react";
function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  const handleClick = () => {
    setIsDone((prevV) => {
      return !prevV;
    });
  };
  return (
    <div onClick={() => props.onCheked(props.id)}>
      <li>{props.task}</li>
    </div>
  );
}
export default ToDoItem;
