import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Tweet from "./Pages/Tweet/Tweet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<Tweet />} path="/tweet" />
      </Routes>
    </div>
  );
}

export default App;
