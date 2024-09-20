import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

const ImageCarousel: React.FC = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1" alt="Slide 1" />
            <p className="legend">Slide 1</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2" alt="Slide 2" />
            <p className="legend">Slide 2</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Slide+3" alt="Slide 3" />
            <p className="legend">Slide 3</p>
          </div>
        </Carousel>

        // <Swiper
        //     spaceBetween={50}
        //     slidesPerView={1}
        //     navigation  // Enable navigation buttons
        //     pagination={{ clickable: true }}  // Enable pagination (dots)
        //     loop={true}  // Infinite loop
        // >
        //     <SwiperSlide><img src="https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1" alt="Slide 1" /></SwiperSlide>
        //     <SwiperSlide><img src="https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2" alt="Slide 2" /></SwiperSlide>
        //     <SwiperSlide><img src="https://via.placeholder.com/600x300/5733FF/FFFFFF?text=Slide+3" alt="Slide 3" /></SwiperSlide>
        // </Swiper>
    );
};

export default ImageCarousel;
