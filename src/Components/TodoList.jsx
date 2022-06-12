import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { todoList } from "../Store/Todo/Action";
import { Link } from "react-router-dom";

const TodoList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(todoList());
  }, [dispatch]);
  return (
    <div style={{ display: "flex", border: "1px solid" , justifyContent: "space-around"}}>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {/* <div>{todo.value}</div> */}
            <div style={{ width: "100%", margin: "auto", marginTop: "15px" }}>
              <Link
                style={{
                  border: "1px solid",
                  textDecoration: "none",
                  padding: "8px",
                  display: "grid",
                  marginBottom: "10px",
                }}
                to={`/todo/${todo.id}`}
              >
                {todo.value}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default TodoList;
