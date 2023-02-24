import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Todo() {
  return (
    <>
      <div className="wrapper-container">
        <div className="add-item">
          <input
            type="text"
            placeholder="Add item..."
          />
          <button className="plus-icon-container" title="Add Item">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          </button>
        </div>
        <div className="todo-list">
          <div className="item">
            <h3>Apple</h3>
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
