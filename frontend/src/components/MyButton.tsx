import React from 'react';
import Button from '@mui/material/Button';

interface MyButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, className, onClick }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className={className} // Example of Tailwind CSS usage
        >
            {label}
        </Button>
    );
};

export default MyButton;
