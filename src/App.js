import ToDoItem from "./components/ToDoItem";
import "./App.css";
import { useState } from "react";
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (event) => {
    const newInput = event.target.value;
    setInputText(newInput);
  };
  const addItem = () => {
    setItems((prevV) => {
      return [prevV, inputText];
    });
    setInputText("");
  };
  const deleteItem = () => {
    const deleteItem = (id) => {
      setItems((prevV) => {
        return prevV.filter((item, index) => {
          return index !== id;
        });
      });
    };
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>to do list</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              task={item}
              id={index}
              key={index}
              onCheked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
