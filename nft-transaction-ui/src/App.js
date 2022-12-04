import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import DashboardPage from "./components/DashboardPage";
import PasswordResetPage from "./components/PasswordResetPage";
import MarketPlace from "./components/MarketPlace";
import './App.css';

function App() {
  return (
    <div style={BodyStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forgot-password" element={<PasswordResetPage />} />
          <Route path="/market-place" element={<MarketPlace />} />
        </Routes>
      </Router>
    </div>
  );
}

const BodyStyle = {
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  background: "linear-gradient(225deg, rgba(0,1,36,1) 10%, rgba(89,9,121,1) 85%, rgba(139,0,255,1) 100%)"
}

export default App;
