import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home, Signup, Login, Verify, ResetPassword, Connect } from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Verify />} />
          <Route path="/" element={<ResetPassword />} />
          <Route path="/" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
