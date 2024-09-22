import { useState, useEffect, FC, ReactElement } from 'react';
import "./scrollTopButton.css";

const ScrollTopButton: FC = (): ReactElement => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`scroll-top-btn ${isVisible ? 'show' : ''}`}
            >
                ↑ Top
            </button>
        </div>
    );
};

export default ScrollTopButton;
