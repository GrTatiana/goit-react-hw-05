import { Link } from "react-router-dom";
import css from "./GoBackBtn.module.css";

const GoBackBtn = ({ path, children }) => {
  return (
    <Link to={path} className={css.linkBtn}>
      {children}
    </Link>
  );
};

export default GoBackBtn;
