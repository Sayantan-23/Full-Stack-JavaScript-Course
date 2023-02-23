import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function Todo() {
  return (
    <>
      <div className="wrapper-container">
        <div className="add-item">
          <input type="text" placeholder="Add item..." />
          <button className="plus-icon-container">
            <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
