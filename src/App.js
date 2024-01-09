import "./App.css";
import Register from "./pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
