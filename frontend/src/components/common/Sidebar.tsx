import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import logo from '../../assets/Logo/logo-final-1.png';

import { SidebarLinks } from "../../../data/main-menus";

const Sidebar: React.FC = () => {
    const { sidebarShow } = useSelector((state: any) => state.common)

    return (
        <>
            {
                sidebarShow &&
                (
                    <div className="bg-black opacity-20 w-full h-full absolute top-0 left-0 z-[1001]"></div>
                )
            }
            <div className={`${sidebarShow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-100%]'} sidebar-wrapper
            shadow-lg bg-white z-[1001] transition-all duration-500 text-black fixed left-0 top-0 bottom-0 w-[200px] lg:w-[250px]`}>
                <div className="cursor-pointer w-full flex items-center justify-center pt-10">
                    <Link to="/" className="py-6">
                        <img src={logo} width={195} height={41} loading="lazy" alt="Haven logo" />
                    </Link>
                </div>
                <div className="flex flex-col items-start justify-center w-full px-10 py-5">
                    {
                        SidebarLinks.map((link, index) => (
                            <Link to={link.path} key={index} className={`${index !== 0 ? 'border-t' : ''} w-full border-gray py-2`}>
                                <p>{link.title}</p>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Sidebar;
