import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>KahootGPT v4.0.0 &bull; Not affiliated with Kahoot! AS</p>
      <p>
        <Link to="/privacy">Privacy</Link> &bull; <Link to="/terms">Terms</Link> &bull; <Link to="/license">License</Link> &bull; Made by <a href="https://github.com/itsmarsss" target="_blank" rel="noopener noreferrer">Marsss</a>
      </p>
    </footer>
  );
}

export default Footer;
