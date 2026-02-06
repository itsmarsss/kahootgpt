import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Tutorial from './Tutorial';
import Privacy from './Privacy';
import Terms from './Terms';
import License from './License';
import './App.css';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/license" element={<License />} />
      </Routes>
    </>
  );
}

export default App;
