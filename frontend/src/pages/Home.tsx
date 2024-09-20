import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

import ImageCarousel from '../components/common/ImageCarousel';

const Home: React.FC = () => {
    // const dispatch = useDispatch();

    useEffect(() => {
        console.log('--- home instructor ---');
    }, []);

    return (
        <React.Fragment>
            <div>
                <ImageCarousel />
            </div>
        </React.Fragment>
    );
}

export default Home;
