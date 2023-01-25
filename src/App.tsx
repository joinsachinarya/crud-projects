import HomePage from "./components/HomePage";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./components/UserPage";
import Page404 from "./components/Page404";

const App: React.FC = () => {
  return (
    <div className="btn-blue">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
