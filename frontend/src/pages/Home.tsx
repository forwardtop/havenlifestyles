import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import {
    Instagram
} from '@mui/icons-material'

import ImageCarousel from '../components/common/ImageCarousel';
import { HomeMainSliders, TopFeatures, followus } from '../../data/home-datas'
import { fadeIn } from '../components/common/MotionFrameVariendts';

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <div className='relative'>
                <ImageCarousel items={HomeMainSliders} withDescription={true} />
            </div>

            <div className='relative mx-auto flex flex-col w-11/12 md:w-7/12 max-w-maxContent items-center justify-between'>
                <div className="top-features flex flex-col sm:flex-col md:flex-row w-full mt-[30px]">
                    <div className="top-feature-list md:w-3/4 sm:w-full flex flex-col md:pr-[20px]">
                        <div className="top-feature-title border-b border-gray py-[5px] mb-[10px]">
                            <p className="text-2xl font-sofia uppercase">top features</p>
                        </div>
                        <div className="w-full flex flex-wrap">
                            {
                                TopFeatures.map((feature, index) => (
                                    <div className="flex flex-col md:w-2/4 sm:w-full md:p-[10px]" key={index}>
                                        <motion.div
                                            variants={fadeIn('down', 0.1)}
                                            initial='hidden'
                                            whileInView={'show'}
                                            viewport={{ once: false, amount: 0.1 }}
                                            className='relative shadow-blue-200 hover:shadow-lg cursor-pointer'
                                        >
                                            <img className="object-cover" src={feature.image} alt={feature.description} />
                                            <div className="absolute left-[10px] top-[10px] w-full">
                                                {
                                                    feature.labels.map((label, lIndex) => (
                                                        <label className="bg-black text-white px-[5px] py-[3px] mr-[3px]" key={lIndex}>{label}</label>
                                                    ))
                                                }
                                            </div>
                                            <div className="p-10">
                                                <div className="feature-description mb-[10px]">
                                                    <a href={feature.description_link} title={feature.description}>
                                                        {feature.description}
                                                    </a>
                                                </div>
                                                <div className="feature-author text-[12px]">
                                                    by <a className="underline" href={feature.author.href}>{feature.author.title}</a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="follow-us md:w-1/4 sm:w-full">
                        <div className="follow-use-list py-[43px]">
                            {
                                followus.map((follow, index) => (
                                    <div className="follow-us-item cursor-pointer border border-gray" key={index}>
                                        <img src={follow.image} />
                                        <div className="follow-action flex justify-center items-center p-7">
                                            <a href="" className="flex justify-center items-center bg-black text-white p-[5px] hover:bg-blue-500">
                                                <Instagram style={{ fontSize: '15px', marginRight: '5px' }} />Follow Us
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="markets flex flex-col sm:flex-col md:flex-row w-full frex-wrap">
                    market list
                </div>

                <div className="latest-post flex flex-col sm:flex-col md:flex-row w-full">
                    <div className="top-feature-list md:w-1/4 sm:w-full">
                        latest post list
                    </div>
                    <div className="follow-us md:w-3/4 sm:w-full">
                        currated homes
                    </div>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Home;
