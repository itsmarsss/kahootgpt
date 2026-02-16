import { Shield } from "lucide-react";
import "./WarningBanner.css";

function WarningBanner() {
    return (
        <div className="warning-banner">
            <Shield size={20} />
            <div>
                <div>
                    <strong>Disclaimer:</strong> Not affiliated with Kahoot!
                    AS.
                </div>
                <div>Host must enable "Show questions & answers".</div>
            </div>
        </div>
    );
}

export default WarningBanner;
