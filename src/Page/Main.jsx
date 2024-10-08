import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";

export default function Main() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-r from-purple-50 to-purple-100">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" elment={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}
