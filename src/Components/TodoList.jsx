import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoList } from "../Store/Action";

const TodoList = () => {
  //   const [todosss, setTodos] = useState([]);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  // console.log("todos12:", todos);

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => {
      const handleList = () => {
        dispatch(todoList({ ...res.data }));
      };
      handleList();
    });
  }, [dispatch]);
  return (
    <div>
      {/* {todos} */}
      <h1>TodoList</h1>
      <div>
        {todos.map(({ value, id, isCompleted }) => (
          <>
            <div key={id}> {value}</div>
            <button>Mark as Completed</button>
            <button>Remove</button>
            <button>Update</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
