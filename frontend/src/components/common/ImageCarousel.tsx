import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/swiper-bundle.css';

import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom';

// import {
//     ArrowForward
// } from "@mui/icons-material";

// import HighlightText from '../../components/Home/HighlightText';
import { fadeIn } from '../../components/common/MotionFrameVariendts';

interface ImageCarouselProps {
  items: { image: string, labels: string[], description: string }[];
  withDescription: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ items, withDescription }) => {
  const swiperRef = useRef<any>(null);  // Use a ref to control Swiper

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);  // Navigate to the specific index
    }
  };

  return (
    <div className="w-full h-full relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={false}
        loop={true}  // Infinite loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay, Pagination, Navigation]} // Add modules like this
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              alt={`Slide ${item.description}`}
              className="w-full h-[600px] object-cover relative"
            />
            {withDescription && (
              <div className="absolute bg-black w-full h-full left-0 top-0 opacity-[0.5]"></div>
            )}
            {
              withDescription && (
                <div className="w-full h-full absolute left-0 top-0 right-0 z-[1] flex justify-center items-center">
                  <div className='md:w-2/4 sm:w-full h-[450px] md:h-[550px] flex flex-col justify-center items-start px-[20px] overflow-hidden'>
                    <motion.div
                      variants={fadeIn('right', 0.3)}
                      initial='hidden'
                      whileInView={'show'}
                      viewport={{ once: false, amount: 0.5 }}
                      className="text-left text-white "
                    >
                      <p className="flex mb-[10px]">
                        {
                          item.labels?.length && item.labels.map((label, labelIndex) => (
                            <span className="text-white bg-black-500 text-center px-[10px] py-[5px] bg-black mr-[5px] text-[12px]" key={labelIndex}>{label}</span>
                          ))
                        }
                      </p>
                      <h1 className="text-white font-bold text-3xl">{item.description}</h1>
                    </motion.div>

                    <div className='flex flex-row gap-7 mt-8 text-white items-center justify-center w-full'>
                      <button className="border border-white p-3">Read More</button>
                    </div>
                  </div>
                </div>
              )
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
