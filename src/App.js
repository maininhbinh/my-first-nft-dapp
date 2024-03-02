import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListAll from "./ListAll";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ListAll />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          {/* <Route exact path="signup" element={<signUp />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;