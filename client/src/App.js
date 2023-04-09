import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Schedule from "./pages/Schedule";
import Enroll from "./pages/Enroll";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Enroll />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
