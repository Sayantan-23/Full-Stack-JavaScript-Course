import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import "./App.css";
import { useState } from "react";
import {
  addTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodo,
} from "./features/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [inputData, setInputData] = useState("");

  const todo = useSelector((state) => state.todo.todoList); // Watch browser's redux dev tool's state tree to understand this.
  const dispatch = useDispatch();

  const addItem = () => {
    if (!inputData) {
    } else {
      dispatch(addTodo(inputData));
    }
    setInputData("");
  };

  const deleteAll = () => {
    dispatch(deleteAllTodo());
  };

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
        <Stack spacing={1} direction={"row"} width="80%">
          <TextField
            onChange={(e) => setInputData(e.target.value)}
            aria-label="Input Field"
            label="Add Todo"
            size="small"
            fullWidth
            value={inputData}
          ></TextField>
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            sx={{ width: "10%" }}
            onClick={addItem}
          >
            <AddIcon />
          </Fab>
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
            {todo.map((todoList) => {
              return (
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ width: "100%" }}
                  key={todoList.id}
                >
                  <Typography
                    variant="body"
                    id="todo-list"
                    sx={{
                      width: "100%",
                      bgcolor: "#78CEC0",
                      borderRadius: "10px",
                      padding: "10px",
                      cursor: "pointer",
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    {todoList.text}
                  </Typography>
                  <IconButton
                    aria-label="Update"
                    size="large"
                    sx={{
                      bgcolor: "#78CEC0",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <CreateTwoToneIcon sx={{ color: "#26695E" }} />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    size="large"
                    sx={{
                      bgcolor: "#78CEC0",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    <DeleteIcon sx={{ color: "#EF767A" }} />
                  </IconButton>
                </Stack>
              );
            })}
            <Button
              color="error"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteAll}
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
