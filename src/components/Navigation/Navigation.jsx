import clsx from "clsx";
import css from "./Navigation";
import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";

const Navigation = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink
          // className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          // className={({ isActive }) => clsx(css.link, isActive && css.active)}
          to="/movies"
        >
          MOVIES
        </NavLink>
      </nav>
    </div>
  );
};
export default Navigation;
