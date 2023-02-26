import React, { useState, useEffect } from "react";
import todoIcon from "../Images/Todo-Icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Todo() {
  // Get Item from Local Storage
  const getLocalStorageItems = () => {
    const list = localStorage.getItem("lists");

    if (list) {
      return JSON.parse(localStorage.getItem("lists"));
    } else {
      return [];
    }
  };

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalStorageItems());
  const [toggleUpdateButton, setToggleUpdateButton] = useState(true);
  const [updatedItems, setUpdatedItems] = useState(null);

  // Add Item
  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleUpdateButton) {
      setItems(
        items.map((element) => {
          if (element.id === updatedItems) {
            return { ...element, name: inputData };
          }
          return element;
        })
      );
      setToggleUpdateButton(true);
      setInputData("");
      setUpdatedItems(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // Delete Item
  const deleteItem = (index) => {
    const updatedItems = items.filter((element) => {
      return element.id !== index;
    });
    setItems(updatedItems);
  };

  // Delete All Item
  const removeAll = () => {
    setItems([]);
  };

  // Update Item
  const updateItem = (id) => {
    let newItems = items.find((element) => {
      return element.id === id;
    });
    setToggleUpdateButton(false);
    setInputData(newItems.name);
    setUpdatedItems(id);
  };

  // Add Item in Local Storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="wrapper-container">
        <img src={todoIcon} alt="" className="todo-icon" />
        <h3 className="todo-heading">TODO</h3>
        <div className="add-item">
          <input
            type="text"
            placeholder="Add item..."
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
          {toggleUpdateButton ? (
            <button
              className="plus-icon-container"
              title="Add Todo"
              onClick={addItem}
            >
              <FontAwesomeIcon className="plus-icon" icon={faPlus} />
            </button>
          ) : (
            <button
              className="pen-icon-container"
              title="Update Todo"
              onClick={addItem}
            >
              <FontAwesomeIcon className="icon-pen" icon={faPen} />
            </button>
          )}
        </div>
        <div className="todo-list">
          <h2 className="list-heading">Todo List</h2>
          {items.map((element) => {
            return (
              <div className="item" key={element.id}>
                <p>{element.name}</p>
                <div className="list-icon-container">
                  <button
                    className="pen-icon-container"
                    title="Update Todo"
                    onClick={() => updateItem(element.id)}
                  >
                    <FontAwesomeIcon className="icon-pen" icon={faPen} />
                  </button>
                  <button
                    className="trash-icon-container"
                    title="Delete Todo"
                    onClick={() => deleteItem(element.id)}
                  >
                    <FontAwesomeIcon className="icon-trash" icon={faTrashCan} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {items[0] ? (
          <button className="remove-btn btn" onClick={removeAll}>
            Delete All
          </button>
        ) : (
          <p className="empty">Empty List...</p>
        )}
      </div>
    </>
  );
}

export default Todo;
