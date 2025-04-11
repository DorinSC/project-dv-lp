import { Link, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

function App() {
  return (
    <div>
      <nav className="p-4 space-x-4">
        <Link to="/">Home</Link>
        <Link to="/servicii">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicii" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
