import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Todo() {
  return (
    <>
      <div className="wrapper-container">
        <div className="add-item">
          <input type="text" placeholder="Add item..." />
          <button className="plus-icon-container" title="Add Todo">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          </button>
        </div>
        <div className="todo-list">
          <div className="item">
            <p>Apple</p>
            <div className="list-icon-container">
              <div className="pen-icon-container" title="Delete Todo">
                <FontAwesomeIcon className="icon-pen" icon={faPen} />
              </div>
              <div className="trash-icon-container" title="Update Todo">
                <FontAwesomeIcon className="icon-trash" icon={faTrashCan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
