import reactLogo from "../images/react-logo.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left-side">
          <img src={reactLogo} alt="React Logo" className="navbar-react-logo" />
          <span className="navbar-title">ReactFacts</span>
        </div>
        <div className="navbar-right-side">
          <span className="navbar-project-text">React Course - Project 1</span>
        </div>
      </div>
    </div>
  );
}
