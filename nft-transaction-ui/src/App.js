import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import DashboardPage from "./components/DashboardPage";
import PasswordResetPage from "./components/PasswordResetPage";
import MarketPlace from "./components/MarketPlace";
import TransactionHistory from "./components/History/TransactionHistory";
import ManagerPanel from "./components/ManagerPanel";
import WalletCard from "../src/components/navBar/wallet";
import './App.css';
import Profile from "./components/navBar/profile";

function App() {
  return (
    <div style={BodyStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/forgot-password" element={<PasswordResetPage />} />
          <Route path="/market-place" element={<MarketPlace />} />
          <Route path="/history" element={<TransactionHistory />} />
          <Route path="/manager" element={<ManagerPanel />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wallet" element={<WalletCard />} />
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
  /*background: "linear-gradient(225deg, rgba(0,1,36,1) 10%, rgba(89,9,121,1) 85%, rgba(139,0,255,1) 100%)"*/
}

export default App;
