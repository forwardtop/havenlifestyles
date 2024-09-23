import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import {
    Instagram
} from '@mui/icons-material'

import ImageCarousel from '../components/common/ImageCarousel';
import { fadeIn } from '../components/common/MotionFrameVariendts';
import HighlightText from '../components/Home/HighlightText';

import { HomeMainSliders, TopFeatures, followus, marketList, latestPosts, curatedHomes } from '../../data/home-datas'

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <div className='relative'>
                <ImageCarousel items={HomeMainSliders} withDescription={true} />
            </div>

            <div className='top-features relative mx-auto flex flex-col w-11/12 lg:w-7/12 md:w-9/12  max-w-maxContent items-center justify-between'>
                <div className="top-features flex flex-col sm:flex-col md:flex-row w-full mt-[30px]">
                    <div className="top-feature-list md:w-2/3 sm:w-full flex flex-col md:pr-[20px]">
                        <div className="top-feature-title border-b border-gray py-[5px] mb-[10px]">
                            <HighlightText text={"TOP FEATURES"} textSize={'text-4xl'} />
                            {/* <p className="text-2xl font-sofia uppercase">top features</p> */}
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
                    <div className="follow-us md:w-1/3 sm:w-full">
                        <div className="follow-use-list py-[43px]">
                            {
                                followus.map((follow, index) => (
                                    <div className="follow-us-item cursor-pointer border border-gray" key={index}>
                                        <img src={follow.image} />
                                        <div className="follow-action flex justify-center items-center p-7">
                                            <a href="" className="wave-button relative flex justify-center items-center text-white p-[5px]">
                                                <Instagram style={{ fontSize: '15px', marginRight: '5px' }} />Follow Us
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="market relative flex items-center justify-between">
                <div className="flex flex-col mx-auto w-11/12 lg:w-7/12">
                    <div className="market-title flex items-center justify-center uppercase py-[15px]">
                        <h3 className="text-4xl text-bold uppercase">market</h3>
                    </div>
                    <div className="markets flex flex-wrap sm:flex-col md:flex-row w-full">
                        {
                            marketList.map((market, index) => (
                                <div className="flex md:w-1/3 sm:w-full items-center justify-center p-1" key={index}>
                                    <a href={market.link}>
                                        <img src={market.image} />
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="relative mx-auto flex flex-col w-11/12 lg:w-7/12 md:w-9/12 max-w-maxContent items-center justify-between">
                <div className="latest-post flex flex-col sm:flex-col md:flex-row w-full my-[20px]">
                    <div className="top-feature-list md:w-1/3 sm:w-full">
                        {/* <h3 className="uppercase text-center mb-[20px]">latest posts</h3> */}
                        <HighlightText text={'LATEST POSTS'} textSize={'text-md'} />
                        <ul className="flex flex-col flex-wrap">
                            {
                                latestPosts.map((latest, index) => (
                                    <li className="w-full flex justify-start items-center border-b border-gray py-[10px]" key={index}>
                                        <a className="w-full sm:w-1/3 md:w-1/3 pr-[10px]" href={latest.link}>
                                            <img src={latest.image} className="object-cover" />
                                        </a>
                                        <div className="flex flex-col w-full sm:w-2/3 md:w-2/3">
                                            <div className="labes flex w-full">
                                                {
                                                    latest.labels.map((label, lIndex) => (
                                                        <label className="font-bold text-[12px] pr-[5px]" key={lIndex}>{label}</label>
                                                    ))
                                                }
                                            </div>
                                            <div className="flex justify-start items-start w-full">
                                                {latest.title}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="follow-us md:w-2/3 sm:w-full md:pl-[20px]">
                        {/* <h3 className="uppercase border-b border-gray pb-[10px] mb-[20px]">curated homes</h3> */}
                        <HighlightText text={'CURATED HOMES'} textSize={'text-md'} />
                        <ul className="flex flex-col w-full">
                            {
                                curatedHomes.map((item, index) => {
                                    return item.type === '1'
                                        ?
                                        (
                                            <li className="flex flex-col w-full py-[20px] border-b border-gray" key={index}>
                                                <a href="item.link" className="max-h-[410px] overflow-hidden">
                                                    <img src={item.image} />
                                                </a>
                                                <div className="item-description flex flex-col justify-start items-start sm:justify-center sm:items-center pt-[10px]">
                                                    <div className="item-title flex">
                                                        <label className="text-[12px] font-bold pr-[3px]">{item.labels.join(', ')}</label>
                                                        <span className="text-[12px] text-gray-500 uppercase"> --- {item.date}</span>
                                                    </div>
                                                    <div className="flex justify-center items-center w-11/12">
                                                        <a href={item.link} className="text-blue-500 font-bold text-2xl sm:text-center cursor-pointer hover:underline">
                                                            {item.title}
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                        :
                                        (
                                            <li className="flex flex-col sm:flex-row w-full py-[20px] border-b border-gray" key={index}>
                                                <a href={item.link} className="w-full sm:w-2/4 sm:pr-[10px]">
                                                    <img src={item.image} />
                                                </a>
                                                <div className="flex flex-col justify-start items-start w-full sm:w-2/4 pt-[10px] sm:pt-0">
                                                    <div className="item-title flex w-full">
                                                        <label className="text-[12px] font-bold pr-[3px]">{item.labels.join(', ')}</label>
                                                        <span className="text-[12px] text-gray-500 uppercase"> --- {item.date}</span>
                                                    </div>
                                                    <div className="flex justify-start items-start w-full">
                                                        <a href={item.link} className="text-blue-500 font-bold text-2xl text-left cursor-pointer hover:underline sm:py-[15px]">
                                                            {item.title}
                                                        </a>
                                                    </div>
                                                    <div className="flex justify-start items-start">
                                                        <p className="line-clamp-6">{item.description}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="subscribe relative flex flex-col items-center justify-between">
                <div className="mx-auto w-11/12 lg:w-7/12 md:w-9/12 max-w-maxContent flex flex-col justify-center items-center w-full my-[10px]">
                    <h3 className="text-4xl text-bold leading-loose">Subscribe for exclusive content</h3>
                    <div className="flex justify-center items-center w-2/3 py-10">
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter email address"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[10px] text-richblack-5 outline-none border border-gray rounded-tr-none rounded-br-none w-2/3"
                        />
                        <button className="subscribe-button wave-button relative text-center text-white p-[11px] uppercase w-2/5 lg:w-[150px] rounded-lg rounded-tl-none rounded-bl-none">
                            sign up
                        </button>
                    </div>
                    <svg
                        className="epcl-waves"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                        </defs>
                        <g className="epcl-parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="2" fill="rgba(252, 255, 255,0.1)" />
                            <use xlinkHref="#gentle-wave" x="48" y="4" fill="rgba(252, 255, 255,0.15)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgba(252, 255, 255,0.1)" />
                        </g>
                    </svg>
                </div>
            </div>
        </React.Fragment >
    );
}

export default Home;
