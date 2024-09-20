import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import ArrowUpward from '@mui/icons-material/ArrowUpward';

import { Home } from "./pages";
import Navbar from './components/common/Navbar';
import Sidebar from "./components/common/Sidebar";

const AppRouter: React.FC = () => {
    const location = useLocation();

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

    return (
        <div className="w-screen min-h-screen bg-white flex flex-col font-inter">
            {showArrow && (
                <button
                    className="scroll-to-top"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <ArrowUpward />
                </button>
            )}
            <Navbar  />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};

export default AppRouter;
