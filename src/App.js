import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RedirectCountdown from "./RedirectCountdown";
import RegistrationForm from "./RegistrationForm";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RedirectCountdown />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
