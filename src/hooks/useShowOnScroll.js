import { useState, useEffect } from "react";

// Threshold is the percentage of page height in decimal format

export function useShowOnScroll(threshold){
    const [showComponent, setShowComponent] = useState(false);
    const [scrollPoint, setScrollPoint] = useState(window.innerHeight * threshold);

    const handleScroll = () => {
        if (window.scrollY > scrollPoint) {
            setShowComponent(true);
        } else {
            setShowComponent(false);
        }
    }

    const handleResize = () => {
        setScrollPoint(window.innerHeight * threshold);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return [showComponent];
}