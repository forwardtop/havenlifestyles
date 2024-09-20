import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Close } from '@mui/icons-material';

import logo from '../../assets/Logo/logo-final-1.png';
import { setSidebarShow } from "../../slices/commonSlice";

const Sidebar: React.FC = () => {
    const dispatch = useDispatch();
    const { showSidebar } = useSelector((state: any) => state.common)

    return (
        <div className={`${showSidebar ? '' : 'invisible'} text-black fixed left-0 top-0 w-[150px] lg:w-[200px]`}>
            <div className="cursor-pointer w-full">
                <Link to="/" className="py-6">
                    <img src={logo} width={195} height={41} loading="lazy" alt="Haven logo" />
                </Link>
                <Close onClick={() => dispatch(setSidebarShow(!showSidebar))} />
            </div>
        </div>
    );
};

export default Sidebar;
