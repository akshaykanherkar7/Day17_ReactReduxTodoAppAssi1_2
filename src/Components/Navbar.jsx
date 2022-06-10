import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Store/Auth/auth.actions";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    navigate("/");
    dispatch(logout());
  };
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Link to="/">Logo</Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
