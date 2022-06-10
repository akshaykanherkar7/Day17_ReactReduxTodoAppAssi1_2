import { ADD_TODO, TODO_LIST } from "./Action.Types";

export const AddTodo = (payload) => ({ type: ADD_TODO, payload });
export const todoList = (payload) => ({ type: TODO_LIST, payload });
