import "../styles/model.css";
import { Link } from "react-router-dom";

function Model() {
  return (
    <div className="overlay">
      <div className="pop-up">
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Model;
