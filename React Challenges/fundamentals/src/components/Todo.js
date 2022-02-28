import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
// tasks = [{id: 1, inputValue: "Eat"}]

function Todo() {
  let sendToStorage;
  const [tasks, setTasks] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const handleAddTask = () => {
    setTasks([...tasks, { inputValue, id: tasks.length }]);
    setinputValue("");
  };
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleDelete = (id) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  };
  return (
    <Container>
      <InputGroup className="mb-3 ">
        <FormControl
          style={{ width: "50%" }}
          onChange={handleChange}
          value={inputValue}
          placeholder="Add task here..."
        />
        <Button
          className="float-end "
          onClick={handleAddTask}
          variant="primary"
        >
          Add Task
        </Button>
      </InputGroup>

      <ListGroup>
        {tasks.map((task) => {
          return (
            <ListGroup.Item key={task.id}>
              {task.inputValue}
              <Button
                onClick={() => handleDelete(task.id)}
                className="float-end"
                variant="danger"
              >
                Remove
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Container>
  );
}

export default Todo;
