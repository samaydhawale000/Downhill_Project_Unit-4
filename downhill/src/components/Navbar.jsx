import { NavLink } from "react-router-dom";
import Group from "../images/Group 8.png";
import { color } from "framer-motion";

function Navbar() {
  return (
    <div
      style={{
        zIndex: 1,
        background: "#313131",
        display: "flex",
        justifyContent: "space-between",
        padding: "6px 45px 6px 45px",
        alignItems: "center",
        color: "#ffffff",
        position: "fixed",
        width: "100%",
        opacity:"96%"
      }}
      className="NavBar"
    >
      <NavLink to="/">
        <img src={Group} alt="logo" style={{ height: "50px" }} />
      </NavLink>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "34%",
        }}
      >
        <NavLink
          to="/serfcates"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
            };
          }}
        >
          SURFCATES
        </NavLink>

        <NavLink
          to="/extras"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
            };
          }}
        >
          EXTRAS
        </NavLink>

        <NavLink
          to="/acessories"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
            };
          }}
        >
          CLOTHS AND ACCESSORIES
        </NavLink>

        <NavLink
          to="/sales"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
            };
          }}
        >
          SALES
        </NavLink>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "end",
          width: "25%",
        }}
      >
        <NavLink
          to="/login"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
              margin: "0px 20px 0px 20px",
            };
          }}
        >
          LOGIN
        </NavLink>

        <NavLink
          to="/wishlist"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
              margin: "0px 20px 0px 20px",
            };
          }}
        >
          WISHLIST
        </NavLink>

        <NavLink
          to="/bag"
          style={({ isActive }) => {
            return {
              fontWeight: isActive && "bold",
              color: isActive ? "#FFC42D" : "#ffffff",
              textDecoration: !isActive && "none",
              margin: "0px 20px 0px 20px",
            };
          }}
        >
          BAGs
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
