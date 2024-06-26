import React, { useState, useEffect } from 'react';
import './BlitzGame.css';

type BlitzGameProps = {
    onBack: () => void;
}

const BlitzGame: React.FC<BlitzGameProps> = ({ onBack }) => {
    const [countdown, setCountdown] = useState<null | number>(null);
    const [active, setActive] = useState(false);

    const handleStart = () => {
        setCountdown(3);
        setActive(true);
    }

    useEffect(() => {
        if (countdown !== null && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [countdown]);

    return (
        <div className="blitz-game">
            <div>
                <div>Hi</div>
                <button onClick={onBack}>Quit</button>
            </div>

            {(!active || (countdown !== null && countdown > 0)) && (
                <div className="modal">
                    <div className="modal-content">
                        {!active ? (
                            <>
                                <h2>Blitz Game Instructions</h2>
                                <p>Here are the instructions for the Blitz Game:</p>
                                <ul>
                                    <li>Rule 1: i</li>
                                    <li>Rule 2: love</li>
                                    <li>Rule 3: you!</li>
                                </ul>
                                <button onClick={handleStart}>Begin</button>
                            </>
                        ) : (
                            <h1>{countdown}</h1>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlitzGame;