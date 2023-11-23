import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./scss/globals.scss";

export default function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
