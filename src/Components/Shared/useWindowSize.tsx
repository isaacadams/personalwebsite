import React, { useState, useLayoutEffect } from 'react';

export default function useWindowSize() {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
}