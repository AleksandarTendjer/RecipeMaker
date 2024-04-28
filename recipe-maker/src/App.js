import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.js';
import About from './views/About.js';
import Home from './views/Home.js';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
