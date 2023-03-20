import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import Fab from "@mui/material/Fab";
import "./App.css";
import { useEffect, useState } from "react";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
} from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [inputData, setInputData] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateTodoId, setUpdateTodoId] = useState("");

  const todo = useSelector((state) => state.todo.todoList); // Watch browser's redux dev tool's state tree to understand this.
  const dispatch = useDispatch();

  // Add Todo
  const addItem = () => {
    if (!inputData) {
    } else {
      dispatch(addTodo(inputData));
    }
    setInputData("");
  };

  // Handle Update
  const handleUpdate = (id) => {
    const todoElement = todo.find((element) => element.id === id);
    if (todoElement.id === id) {
      setIsUpdating(true);
      setInputData(todoElement.text);
      setUpdateTodoId(todoElement.id);
    }
  };

  // Cancel Update
  const cancelUpdate = () => {
    setIsUpdating(false);
    setInputData("");
    setUpdateTodoId("");
  };

  // Update Item
  const updateTodoList = () => {
    const todoElement = todo.find((element) => element.id === updateTodoId);
    const updatedObj = {
      id: todoElement.id,
      text: inputData,
    };
    dispatch(updateTodo(updatedObj));
    setInputData("");
    setIsUpdating(false);
    setUpdateTodoId("");
  };

  // Store in Local Storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <Typography
        variant="h3"
        color="#E4ECF1"
        margin="auto"
        width="max-content"
        fontWeight="500"
      >
        TODO APP
      </Typography>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: "40px",
          padding: "20px",
          bgcolor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "12px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(3.7px)",
          WebkitBackdropFilter: "blur(3.7px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Stack
          spacing={1}
          direction={"row"}
          width="100%"
          alignItems="flex-start"
        >
          <TextField
            onChange={(e) => setInputData(e.target.value)}
            aria-label="Input Field"
            label="Add Todo"
            size="small"
            value={inputData}
            sx={{ width: "100%" }}
          ></TextField>
          {isUpdating ? (
            <Stack direction="row" gap="10px">
              <Fab
                onClick={updateTodoList}
                title="Update"
                aria-label="edit"
                size="small"
                sx={{ bgcolor: "#84D1D7" }}
              >
                <CreateTwoToneIcon sx={{ color: "#26695E" }} />
              </Fab>
              <Fab
                onClick={cancelUpdate}
                title="Cancel Update"
                aria-label="edit"
                size="small"
                sx={{ bgcolor: "#FF6666", width: "40px" }}
              >
                <ClearIcon />
              </Fab>
            </Stack>
          ) : (
            <Fab
              title="Add Todo"
              color="primary"
              aria-label="add"
              size="small"
              sx={{ width: "45px", height: "40px" }}
              onClick={addItem}
            >
              <AddIcon />
            </Fab>
          )}
        </Stack>
        {!todo[0] ? (
          <Typography>Empty List</Typography>
        ) : (
          <Stack
            gap="20px"
            width="100%"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" color="#0b0b0b">
              Todo List
            </Typography>
            {todo.map((todoList) => {
              return (
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ width: "100%" }}
                  key={todoList.id}
                  alignItems="flex-start"
                >
                  <Typography
                    variant="body"
                    id="todo-list"
                    sx={{
                      width: "100%",
                      bgcolor: "#78CEC0",
                      borderRadius: "10px",
                      padding: "10px",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                      wordBreak: "break-word",
                    }}
                  >
                    {todoList.text}
                  </Typography>
                  <IconButton
                    title="Update"
                    onClick={() => handleUpdate(todoList.id)}
                    aria-label="Update"
                    size="large"
                    disabled={isUpdating ? true : false}
                    sx={{
                      bgcolor: "#84D1D7",
                      boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <CreateTwoToneIcon sx={{ color: "#26695E" }} />
                  </IconButton>
                  <IconButton
                    title="Delete"
                    onClick={() => dispatch(deleteTodo(todoList.id))}
                    aria-label="Delete"
                    size="large"
                    disabled={isUpdating ? true : false}
                    sx={{
                      bgcolor: "#EF767A",
                      boxShadow: "0 4px 5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                </Stack>
              );
            })}
            <Button
              title="Delete All Todo"
              aria-label="Delete All"
              color="error"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(deleteAllTodo())}
              disabled={isUpdating ? true : false}
            >
              Delete All
            </Button>
          </Stack>
        )}
      </Container>
    </>
  );
}

export default App;
