import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./router/Layout";
import Home from "./screen/Home";
import Login from "./components/login/Login";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SignUp from "./components/login/SignUp";

function App() {
  return (
    <div className="bg-white dark:bg-black mainclassofdiv">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Signup" element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
