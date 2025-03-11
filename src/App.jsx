import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from "./components/Resources";
import PageTitle from "./components/PageTitle";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav>
        <Routes>
          <Route path="/" element={<Resources category="html" />} />
          <Route path="/html" element={<Resources category="html" />} />
          <Route path="/css" element={<Resources category="css" />} />
          <Route path="/javascript" element={<Resources category="javascript" />} />
          <Route path="/react" element={<Resources category="react" />} />
          <Route path="/sanity" element={<Resources category="headless-cms" />} />
        </Routes>
      </Nav>
    </Router>
  );
}

export default App;