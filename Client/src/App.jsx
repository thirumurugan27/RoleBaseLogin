import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Student from "./pages/Student/Student";
import Faculty from "./pages/Faculty/Faculty";
import Login from "./pages/Login/Login";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/student" element={<Student />} />
        <Route path="/faculty" element={<Faculty/>} />
      </Routes>
    </Router>
  );
}
