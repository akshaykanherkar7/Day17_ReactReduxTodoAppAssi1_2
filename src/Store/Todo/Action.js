import axios from "axios";
import { ADD_TODO, DELETE_TODO, TODO_LIST, TOGGLE_TODO } from "./Action.Types";

export const AddTodo = (payload) => (dispatch) => {
  axios.post("http://localhost:8080/todos", payload).then((res) => {
    dispatch({ type: ADD_TODO, payload: res.data });
  });
};
export const toggleTodo = (product) => (dispatch) => {
  let id = product.id;
  console.log(id);
  let temp = { ...product, isCompleted: !product.isCompleted };
  axios.patch(`http://localhost:8080/todos/${id}`, temp).then((res) => {
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  });
};

export const todoList = () => (dispatch) => {
  return axios.get("http://localhost:8080/todos").then((res) => {
    dispatch({ type: TODO_LIST, payload: res.data });
  });
};

export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
    dispatch({ type: DELETE_TODO, payload: id });
  });
};
