import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from "./components/Resources";
import PageTitle from "./components/PageTitle";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Resources category="HTML" />} />
          <Route path="/html" element={<Resources category="HTML" />} />
          <Route path="/css" element={<Resources category="CSS" />} />
          <Route path="/javascript" element={<Resources category="JavaScript" />} />
          <Route path="/react" element={<Resources category="React" />} />
          <Route path="/sanity" element={<Resources category="Headless-Cms" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;