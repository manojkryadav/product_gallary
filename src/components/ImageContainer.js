//CAROUSEL THUMBNAILS HOLDER COMPONENT

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImageContainer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full md:w-1/3 p-4 border overflow-auto" style={{ maxHeight: '100vh' }}>
            <div className="sticky">
                <img src="./images/heart.svg" alt="Heart" />
            </div>
            <div>
                {isMobile ? (
                    <Carousel showThumbs={false} showStatus={false} showIndicators={true} infiniteLoop={true}>
                        <div> <img src="./images/img5.png" alt="Product" /> </div>
                        <div> <img src="./images/img4.png" alt="Product" /> </div>
                        <div> <img src="./images/img3.png" alt="Product" /> </div>
                        <div> <img src="./images/img1.png" alt="Product" /> </div>
                    </Carousel>
                ) : (
                    <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                        <img src="./images/img5.png" alt="Product" className="mb-2" />
                        <img src="./images/img4.png" alt="Product" className="mb-4" />
                        <img src="./images/img3.png" alt="Product" className="mb-4" />
                        <img src="./images/img1.png" alt="Product" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageContainer;

