import "./Main.scss";
import reactLogoHalf from "../images/react-logo-half.png";

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main-container">
          <h1 className="main-title">Fun facts about React</h1>
          <ul className="main-list">
            <li className="main-list-item">Was first released in 2013</li>
            <li className="main-list-item">
              Was originally created by Jordan Walke
            </li>
            <li className="main-list-item">
              Has well over 100K stars on GitHub
            </li>
            <li className="main-list-item">Is maintained by Facebook</li>
            <li className="main-list-item">
              Powers thousands of enterprise apps, including mobile apps
            </li>
          </ul>
        </div>
      </div>
      <div className="react-logo-container">
        <div className="react-logo-space" />
        <img src={reactLogoHalf} alt="" className="react-logo-img" />
      </div>
    </>
  );
}
