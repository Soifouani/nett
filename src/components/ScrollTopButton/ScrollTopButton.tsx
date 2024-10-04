import { useState, useEffect, FC, ReactElement } from 'react';
import "./scrollTopButton.css";

const ScrollTopButton: FC = (): ReactElement => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = (): void => {
        setIsVisible(window.scrollY > 300);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-top-btn ${isVisible ? 'show' : ''}`}
        >
            ↑
        </button>
    );
};

export default ScrollTopButton;
