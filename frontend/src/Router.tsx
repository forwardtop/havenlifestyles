import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ArrowUpward from '@mui/icons-material/ArrowUpward';

import { setSidebarShow } from "./slices/commonSlice";

import { Home } from "./pages";
import Navbar from './components/common/Navbar';
import Sidebar from "./components/common/Sidebar";

const AppRouter: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { sidebarShow } = useSelector((state: any) => state.common)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Go upward arrow - show, unshow
    const [showArrow, setShowArrow] = useState<boolean>(false);

    const handleArrow = () => {
        setShowArrow(window.scrollY > 500);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleArrow);
        return () => {
            window.removeEventListener('scroll', handleArrow);
        };
    }, []);

    const handleClickBody = (e: any) => {
        if (sidebarShow) {
            dispatch(setSidebarShow(!sidebarShow));
        }
    }

    return (
        <div className="w-screen min-h-screen bg-white flex flex-col font-inter" onClick={handleClickBody}>
            {showArrow && (
                <button
                    className="scroll-to-top"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <ArrowUpward />
                </button>
            )}
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
