import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className="custom-loader"></div>
        </div>
    );
}

export default Loading;
