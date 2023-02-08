import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeBar } from "./components";
import {
  Home,
  Signup,
  Login,
  Verify,
  ResetPassword,
  Connect,
  EmployerSignup,
  InternSignup,
} from "./pages";

function App() {
  return (
    <Router>
      <HomeBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/intern" element={<InternSignup />} />
        <Route path="/signup/employer" element={<EmployerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
}

export default App;
