import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
    // const dispatch = useDispatch();

    useEffect(() => {
        console.log('--- home instructor ---');
    }, []);

    return (
        <React.Fragment>
            <div>
                coming soon
            </div>
        </React.Fragment>
    );
}

export default Home;
