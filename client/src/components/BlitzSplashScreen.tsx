import React, { useState, useEffect } from 'react';

type SplashScreenProps = {
    onCountdownComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onCountdownComplete }) => {
    const [count, setCount] = useState(3);

    useEffect(() => {
        if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            onCountdownComplete();
        }
    }, [count, onCountdownComplete]);

    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default SplashScreen;
