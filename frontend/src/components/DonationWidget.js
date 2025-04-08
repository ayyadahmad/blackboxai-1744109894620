import React, { useState } from 'react';

const DonationWidget = () => {
    const [donationAmount, setDonationAmount] = useState(0);
    const [showImpact, setShowImpact] = useState(false);

    const handleDonate = (amount) => {
        setDonationAmount(amount);
        setShowImpact(true);
        // Animation logic for 3D coin drop and tree growth would go here
    };

    return (
        <div className="donation-widget">
            <h2>Donate Now</h2>
            <button className="donate-button" onClick={() => handleDonate(10)}>Donate $10</button>
            <button className="donate-button" onClick={() => handleDonate(25)}>Donate $25</button>
            <button className="donate-button" onClick={() => handleDonate(50)}>Donate $50</button>
            <div className="visualization">
                {/* 3D visualization will be implemented here */}
            </div>
            {showImpact && (
                <div className="impact-overlay">
                    <p>${donationAmount} plants 5 trees. ${donationAmount * 10} = 1 ton of CO₂ reduced.</p>
                </div>
            )}
        </div>
    );
};

export default DonationWidget;
