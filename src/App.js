import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import TodoId from "./Components/TodoId";
import TodoList from "./Components/TodoList";
import { RequiredAuth } from "./hoc/RequiredAuth";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="todo/*" element={<Home />}>
          <Route path=":id" element={<TodoId />}></Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
