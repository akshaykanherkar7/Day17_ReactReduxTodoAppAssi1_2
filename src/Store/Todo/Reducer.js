import { ADD_TODO, DELETE_TODO, TODO_LIST, TOGGLE_TODO } from "./Action.Types";

export const TodoReducer = (state = { todos: [] }, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, payload] };
    }

    case TODO_LIST: {
      console.log("TODO_LIST", state.todos);
      return { ...state, todos: payload };
    }

    case TOGGLE_TODO: {
      // console.log("PAYLOAD", payload);
      // state.todos.forEach((todo, i) => {
      //   if (payload.id === todo.id) {
      //     state.todos[i].isCompleted = !state.todos[i].isCompleted;
      //   }
      // });
      // return { ...state };
      let newTodos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      console.log("newTodos:", newTodos);
      console.log("state:", state);
      return { ...state, todos: [...state.todos, newTodos] };
    }

    case DELETE_TODO: {
      // return { ...state.data.filter((todo) => todo.id !== payload) };
      let deletedTodo = state.todos.filter((todo) => todo.id !== payload);
      console.log("deletedTodo:", deletedTodo);
      return {
        ...state,
        todos: [...deletedTodo],
      };
    }

    default: {
      return state;
    }
  }
};
