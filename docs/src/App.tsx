import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home/Home';
import Tutorial from './pages/Tutorial/Tutorial';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import License from './pages/License/License';
import NotFound from './pages/NotFound/NotFound';

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
