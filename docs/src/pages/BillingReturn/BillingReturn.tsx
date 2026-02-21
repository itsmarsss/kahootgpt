import { useEffect } from "react";
import "./BillingReturn.css";

const BillingReturn = () => {
    useEffect(() => {
        // Try to close the window after 1.5 seconds
        const closeTimer = setTimeout(() => {
            window.close();
        }, 1500);

        return () => clearTimeout(closeTimer);
    }, []);

    return (
        <div className="billing-return">
            <div className="billing-return-content">
                <div className="billing-return-icon">✓</div>
                <h1 className="billing-return-title">
                    Payment Updated Successfully!
                </h1>
                <p className="billing-return-text">
                    This window will close in a moment...
                </p>
                <p className="billing-return-subtext">
                    If the window doesn't close automatically, you can safely
                    close it manually.
                </p>
            </div>
        </div>
    );
};

export default BillingReturn;
