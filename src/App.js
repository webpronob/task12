import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./Firebase/Firebase.init";

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="app">
      {
        user ?
        <div className="fixed-section">
        <div className="bg-section">
          <svg
          className="fixed-icon"
            width="30"
            height="30"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.6588 0C15.4088 0 15.1488 0.1 14.9588 0.29L13.1288 2.12L16.8788 5.87L18.7088 4.04C19.0988 3.65 19.0988 3.02 18.7088 2.63L16.3688 0.29C16.1688 0.09 15.9188 0 15.6588 0ZM12.0588 6.02L12.9788 6.94L3.91878 16H2.99878V15.08L12.0588 6.02ZM0.998779 14.25L12.0588 3.19L15.8088 6.94L4.74878 18H0.998779V14.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      :""
      }
      {/* <LoginModal></LoginModal> */}
      <Register></Register>
      <Navbar></Navbar>
      <Home></Home>
      <Login></Login>
    </div>
  );
}

export default App;
