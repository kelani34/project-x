import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Signup, Login, Verify, ResetPassword, Connect } from "./pages";
import HomeBar from "./NavBar/HomeBar";

function App() {
  return (
    <div>
      <Router>
        <HomeBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
