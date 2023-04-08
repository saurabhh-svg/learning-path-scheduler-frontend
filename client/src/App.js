import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Schedule from "./pages/Schedule";
import Enroll from "./pages/Enroll";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
