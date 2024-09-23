import React, { useEffect, useRef, useState } from 'react';

import ImageCarousel from '../components/common/ImageCarousel';
import { HomeMainSliders } from '../../data/home-datas'

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <div className='relative'>
                <ImageCarousel items={HomeMainSliders} withDescription={true} />
            </div>
        </React.Fragment>
    );
}

export default Home;
