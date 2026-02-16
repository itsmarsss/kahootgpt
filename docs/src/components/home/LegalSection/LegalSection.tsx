import { Link } from "react-router-dom";
import { handleContactClick } from "../../../utils/contact";
import "./LegalSection.css";

function LegalSection() {
    return (
        <section className="section legal" id="legal">
            <h3>Privacy & Legal</h3>
            <p>
                No data collection. No tracking. Config stored locally.
            </p>
            <p>
                <Link to="/privacy">Privacy Policy</Link> •{" "}
                <Link to="/terms">Terms of Service</Link> •{" "}
                <Link to="/license">License (GPL v3.0)</Link>
            </p>
            <p>
                <strong>Contact:</strong>{" "}
                <a onClick={handleContactClick}>
                    &#x69;&#x74;&#x73;&#x6D;&#x61;&#x72;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x7A;&#x40;&#x70;&#x72;&#x6F;&#x74;&#x6F;&#x6E;&#x6D;&#x61;&#x69;&#x6C;&#x2E;&#x63;&#x6F;&#x6D;
                </a>
            </p>
        </section>
    );
}

export default LegalSection;
