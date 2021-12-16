import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
import axios from "axios";

function TaskScreen() {
  const [tasks, setTasks] = useState([]);

  const getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    setTasks(data.splice(0, 3));
  };
  useEffect(() => {
    getTodos();
    return () => {
      setTasks([]);
    };
  }, []);

  const [task, setTask] = useState("");

  const addHandler = () => {
    let random_id = Math.floor(1 + Math.random() * (10000 - 1));

    if (task === "") {
      alert("please enter task");
    } else {
      const newTask = [
        ...tasks,
        { id: random_id, title: task, completed: false }
      ];
      setTasks(newTask);
      setTask("");
    }
  };

  const deleteHandler = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  let count = 0;
  const [showInput, setShowInput] = useState(false);
  return (
    <>
      <div className="todo-container">
        <div className="tasks" style={{ width: "70%" }}>
          <ListGroup variant="flush">
            {tasks.map((task, index) => (
              <Row key={index} style={{ height: "100px" }}>
                <Col xl={9} lg={9} md={9} ms={9} xs={9}>
                  <ListGroup.Item
                    style={{
                      borderBottom: "none",
                      borderLeft: "none",
                      borderRight: "none"
                    }}
                  >
                    <Row style={{ height: "100px", padding: "10px" }}>
                      <Col>{(count = count + 1)}</Col> <Col>{task.title}</Col>{" "}
                      <Col>{task.completed ? "true" : "false"}</Col> <br></br>
                    </Row>
                  </ListGroup.Item>
                </Col>
                <Col xl={3} lg={3} md={3} ms={3} xs={3}>
                  <Button
                    className="btn btn-dark "
                    style={{
                      borderRadius: "5px",
                      margin: "5px",
                      width: "150px",
                      height: "50px"
                    }}
                    onClick={(e) => deleteHandler(index)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            ))}
          </ListGroup>
        </div>
        <br></br>
      </div>
      <div>
        <Button
          className="btn"
          style={{
            backgroundColor: "#000",
            borderRadius: "5px",
            marginLeft: "10px",
            color: "white"
          }}
          onClick={() => setShowInput(!showInput)}
        >
          Add Task
        </Button>
      </div>
      {showInput && (
        <div className="text-center">
          <input
            style={{ width: "50%", height: "40px", borderRadius: "5px" }}
            placeholder=" Add New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <br></br>
          <Button
            className="btn"
            style={{
              backgroundColor: "#000",
              borderRadius: "5px",
              margin: "10px",
              color: "white"
            }}
            onClick={addHandler}
          >
            Add New Task
          </Button>
        </div>
      )}
    </>
  );
}

export default TaskScreen;
