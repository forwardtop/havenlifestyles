import React, { useState, useEffect, useRef } from 'react'
import { Link, matchPath, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/Logo/logo-final-1.png'
import { FooterLinks } from '../../../data/main-menus'

import {
    Home,
    Article,
    Info,
    Contacts,
    Facebook,
    Instagram,
    LinkedIn
} from '@mui/icons-material'

const Footer: React.FC = () => {
    const iconsMap = {
        home: <Home style={{ fontSize: '15px' }} />,
        article: <Article style={{ fontSize: '15px' }} />,
        info: <Info style={{ fontSize: '15px' }} />,
        contacts: <Contacts style={{ fontSize: '15px' }} />,
    };

    return (
        <footer className={`flex w-full items-center justify-center border-t border-gray py-[20px]`}>
            <div className="flex flex-col w-full justify-center items-center logo">
                <Link to="/" className="py-6">
                    <img src={logo} width={195} height={41} loading='lazy' alt="Haven log" />
                </Link>
                <ul className="flex flex-row flex-wrap">
                    {
                        FooterLinks.map((link, index) => (
                            <li key={index} className="mr-[20px] flex justify-center items-center uppercase">
                                {iconsMap[link.icon]}
                                <a href={link.path} className="ml-[5px]">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
                <ul className="social-icons flex justify-center items-center my-[20px]">
                    <li className="px-[15px]">
                        <Link to={''}>
                            <Facebook />
                        </Link>
                    </li>
                    <li className="w-[22px] h-[22x] mx-[15px]">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                        </svg>
                    </li>
                    <li className="px-[15px]">
                        <Link to={''}>
                            <LinkedIn />
                        </Link>
                    </li>
                    <li className="px-[15px]">
                        <Link to={''}>
                            <Instagram />
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
