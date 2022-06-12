import React, { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, todoList } from "../Store/Todo/Action";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import TodoList from "./TodoList";

const Home = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const hadleAddTodo = () => {
    let value = ref.current.value;
    console.log("in Function");
    dispatch(AddTodo({ id: uuid(), value: value, isCompleted: false }));
    ref.current.value = null;
  };

  useEffect(() => {
    dispatch(todoList());
  }, [dispatch]);

  return (
    <>
      <div>
        <h1>TODOS APP</h1>
        <input type="text" placeholder="Enter Something..." ref={ref} />
        <button onClick={hadleAddTodo}>Add Todo</button>
      </div>
      <TodoList></TodoList>
      {/* <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.value}</div>
            <button>Mark as Completed</button>
            <button>Remove</button>
            <button>Update</button>
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Home;
