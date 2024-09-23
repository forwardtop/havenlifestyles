import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
    KeyboardArrowDown,
    KeyboardArrowRight,
    DensityMedium,
    Search
} from '@mui/icons-material';

import { setSidebarShow, setSearchShow } from "../../slices/commonSlice";
// import { fetchMainCategories } from '../../services/apis/commonAPI';

import { NavbarLinks } from "../../../data/main-menus";
import logo from '../../assets/Logo/logo-final-1.png';

// interface MainMenu {
//     title: string;
//     path?: string;
//     children?: MainMenu[];
// }

const Navbar: React.FC = () => {
    // const location = useLocation();
    const dispatch = useDispatch();
    // const inputRef = useRef(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const searchShow = useSelector((state: any) => state.common.searchShow)

    // const [mainMenus, setMainMenus] = useState<{ menu: MainMenu }[]>([]);
    const [loading] = useState(false);
    const [email, setEmail] = useState('');

    // const fetchMainMenus = async () => {
    //     try {
    //         setLoading(true);
    //         const res = await fetchMainCategories();
    //         setMainMenus(res);
    //     } catch (error) {
    //         console.log("Could not fetch the category list = ", error);
    //     }
    //     setLoading(false);
    // };

    useEffect(() => {
        // fetchMainMenus();
    }, []);

    // const matchRoute = (route: string) => {
    //     return matchPath({ path: route }, location.pathname);
    // };

    const [showNavbar, setShowNavbar] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY) {
                setShowNavbar('hide');
            } else {
                setShowNavbar('show');
            }
        } else {
            setShowNavbar('top');
        }

        setLastScrollY(window.scrollY);
    };

    const handleOnChange = (e: any) => {
        setEmail(e.target.value)
    }

    const toggleSearch = () => {
        dispatch(setSearchShow(!searchShow))

        if (!searchShow) {
            setTimeout(() => {
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            }, 500)
        }
    }

    return (
        <nav className={`z-[10] flex w-full items-center justify-center border-b-[1px] border-b-richblack-700 text-white translate-y-0 transition-all ${showNavbar}`}>
            <div className='flex w-full bg-white max-w-maxContent items-center justify-center flex-col'>
                {/* Logo */}
                <div className="relative flex items-center justify-center w-11/12">
                    <DensityMedium className="absolute left-0 cursor-pointer text-black" onClick={() => dispatch(setSidebarShow(true))} />
                    <Link to="/" className="py-6">
                        <img src={logo} width={195} height={41} loading='lazy' alt="Haven log" />
                    </Link>
                    <div className="absolute right-0 w-[250px] overflow-hidden">
                        <input
                            ref={inputRef}
                            required
                            type="text"
                            name="email"
                            value={email}
                            onChange={handleOnChange}
                            placeholder=""
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className={`border w-full bg-gray-100 p-[12px] pr-[40px] text-black outline-none transition-all duration-500
                                ${searchShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                        />
                        <Search className="absolute right-3 top-[50%] translate-y-[-50%] cursor-pointer text-black" onClick={toggleSearch} />
                    </div>
                </div>

                {/* Nav Links - visible for only large devices */}
                <ul className='hidden sm:flex gap-x-6 w-full flex item-center justify-center text-black p-3 border-t border-grey'>
                    {NavbarLinks.map((link, index) => ( // TODO --- remove this line
                        // {mainMenus.map((link, index) => (
                        <li key={index}>
                            {
                                link.children?.length
                                    ?
                                    (
                                        <div className={`group relative flex cursor-pointer line-height-32 items-center gap-1 text-black hover:text-blue-500 transition-colors duration-300`}>
                                            <p>{link.title}</p>
                                            <KeyboardArrowDown />
                                            {/* drop down menu */}
                                            <div className="invisible absolute shadow-md
                                                left-[50%] top-[50%] z-[1000] flex w-[150px] 
                                                translate-x-[-50%] translate-y-[3em] flex-col bg-white p-4 
                                                text-richblack-900 opacity-0 transition-all duration-150 
                                                group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[250px]">
                                                {
                                                    loading
                                                        ?
                                                        (<p className="text-center ">Loading...</p>)
                                                        :
                                                        link.children.map((sub, i) => (
                                                            sub.children?.length
                                                                ?
                                                                (
                                                                    <div
                                                                        className={`second relative flex cursor-pointer 
                                                                            items-center justify-between text-black hover:text-blue-500 transition-colors duration-300
                                                                            ${i !== 0 ? 'border-t border-color-grey' : ''}`}
                                                                        key={i}
                                                                    >
                                                                        <p>{sub.title}</p>
                                                                        <KeyboardArrowRight />
                                                                        <div className="invisible absolute bg-white p-2 text-black shadow-md 
                                                                            left-[100%] top-[-100%] z-[1000] w-[150px]  lg:w-[250px] 
                                                                            second-hover:visible second-hover:translate-y-[1.65em] second-hover:opacity-100">
                                                                            <p>{sub.title}</p>
                                                                        </div>
                                                                    </div>
                                                                )
                                                                :
                                                                (
                                                                    <Link to={sub.path ? sub.path : ''} className="text-black">
                                                                        <p>{sub.title}</p>
                                                                    </Link>
                                                                )
                                                        ))
                                                }
                                            </div>
                                        </div>
                                    )
                                    :
                                    (
                                        <Link to={link.path ? link.path : '/'}>
                                            <p className={`text-black hover:text-blue-500 transition-colors duration-300 p-1 px-3`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
