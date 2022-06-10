import axios from "axios";
import { ADD_TODO, TODO_LIST } from "./Action.Types";

export const TodoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      axios.post("http://localhost:8080/todos", { ...payload });
      return state;
    }

    case TODO_LIST: {
      let temp = [];
      for (let key in payload) {
        temp.push(payload[key]);
      }
      console.log("temp:", temp);
      return {
        ...state,
        todos: [...temp],
      };
    }

    default: {
      return state;
    }
  }
};
