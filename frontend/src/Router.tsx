
import { useEffect, useState } from "react"
import { Route, Routes, useLocation, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import ArrowUpward from '@mui/icons-material/ArrowUpward'

import { setSidebarShow } from "./slices/commonSlice";

import Home from "./pages/Home"
import PageNotFound from './pages/PageNotFound'

import Navbar from "./components/common/Navbar"
import Sidebar from "./components/common/Sidebar"
import Footer from "./components/common/Footer"


function App() {
    // Scroll to the top of the page when the component mounts
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    useEffect(() => {
        scrollTo(0, 0);
    }, [location])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const { sidebarShow } = useSelector((state: any) => state.common)

    // Go upward arrow - show , unshow
    const [showArrow, setShowArrow] = useState(false)

    const handleArrow = () => {
        if (window.scrollY > 500) {
            setShowArrow(true)
        } else setShowArrow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleArrow);
        return () => {
            window.removeEventListener('scroll', handleArrow);
        }
    }, [showArrow])

    const handleClickBody = (e: any) => {
        if (sidebarShow) {
            dispatch(setSidebarShow(!sidebarShow));
        }
    }

    return (
        <div className="w-screen min-h-screen bg-white flex flex-col font-inter" onClick={handleClickBody}>
            {/* go upward arrow */}
            {showArrow && (
                <button
                    onClick={() => window.scrollTo(0, 0)}
                    className={`bg-blue-500 hover:bg-blue-600 hover:scale-110 p-3 text-lg text-white rounded-full fixed right-3 z-10 duration-500 ease-in-out 
                        ${showArrow ? 'bottom-6' : '-bottom-24'}`}
                >
                    <ArrowUpward />
                </button>
            )}
            <Navbar />
            <Sidebar />

            <Routes>
                <Route path="/" element={<Home />} />

                {/* Page Not Found (404 Page ) */}
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
