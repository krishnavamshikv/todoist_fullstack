import { useState } from "react";
import todoListArray from "./data";

const TodoList = () => {
  const [listItem, setListItem] = useState("");
  const [todoList, setTodoList] = useState([...todoListArray]);
  const [checkedIndexes, setCheckedIndexes] = useState([]);

  const addItemToList = () => {
    setTodoList([...todoList, listItem]);
    todoListArray.push(listItem);
    setListItem("");
  };

  const handleCheckChange = (getCurrentIndex) => {
    const cpyCheckedIndexes = [...checkedIndexes];

    if (cpyCheckedIndexes.includes(getCurrentIndex)) {
      cpyCheckedIndexes.splice(cpyCheckedIndexes.indexOf(getCurrentIndex), 1);
    } else {
      cpyCheckedIndexes.push(getCurrentIndex);
    }

    setCheckedIndexes(cpyCheckedIndexes);
  };

  return (
    <div className="wrapper">
      <div className="listEntryContainer">
        <input
          placeholder="Enter item"
          value={listItem}
          onChange={(e) => setListItem(e.target.value)}
          onKeyDown = {(e)=> {if(e.key === "Enter"){addItemToList()}}}
        ></input>
        <button onClick={addItemToList}>+</button>
      </div>

      {todoList && todoList.length > 0
        ? todoList.map((Item, index) => (
            <div className="listItem" key={index}>
              <input
                type="checkbox"
                onChange={() => {
                  handleCheckChange(index);
                }}
              ></input>
              <label
                style={{
                  textDecoration: checkedIndexes.includes(index)
                    ? "line-through"
                    : "none",
                }}
              >
                {Item}
              </label>
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoList;
