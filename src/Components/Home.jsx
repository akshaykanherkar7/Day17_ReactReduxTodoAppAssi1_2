import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../Store/Action";
import { v4 as uuid } from "uuid";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  const hadleAddTodo = () => {
    let value = ref.current.value;
    console.log("in Function");
    dispatch(AddTodo({ id: uuid(), value: value, isCompleted: false }));
  };

  // axios.post("http://localhost:8080/todos", {
  //   id: uuid(),
  //   value: value,
  //   isCompleted: false,
  // })
  return (
    <>
      <div>
        <h1>TODOS APP</h1>
        <input type="text" placeholder="Enter Something..." ref={ref} />
        <button onClick={hadleAddTodo}>Add Todo</button>
      </div>
      <Link to="/todo"> TodoList</Link>
    </>
  );
};

export default Home;
