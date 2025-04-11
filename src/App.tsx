import { Link, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";

function App() {
  return (
    <div>
      <nav className="p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
