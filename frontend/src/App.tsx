import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import ArrowUpward from '@mui/icons-material/ArrowUpward';

import Home from './pages/Home';

const App: React.FC = () => {
  // const user = useSelector((state: any) => state.profile); // Ensure you have RootState defined

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
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      {showArrow && (
        <button
          className="scroll-to-top"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowUpward />
        </button>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
