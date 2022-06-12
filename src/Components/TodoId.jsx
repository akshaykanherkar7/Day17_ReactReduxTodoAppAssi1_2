import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteTodo, toggleTodo } from "../Store/Todo/Action";

const TodoId = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/todos/${id}`).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);
  console.log("Product", product.isCompleted);

  const handleDeleteTodo = (ID) => {
    dispatch(deleteTodo(ID));
  };
  return (
    <div>
      ProductDetail ID: {id}
      <div
        style={
          product.isCompleted
            ? { textDecoration: "line-throgh" }
            : { textDecoration: "none" }
        }
      >
        Name: {product.value}
      </div>
      <div> Status: {product.isCompleted ? "YES" : "NO"}</div>
      <div>
        <button onClick={() => dispatch(toggleTodo(product))}>
          {product.isCompleted ? "Mark as Uncomplete" : "Mark as Completed"}
        </button>
        <button onClick={() => handleDeleteTodo(product.id)}>Remove</button>
        <button>Update</button>
      </div>
    </div>
  );
};

export default TodoId;
