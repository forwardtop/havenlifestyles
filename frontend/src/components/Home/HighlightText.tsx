import React from 'react';

interface HighlightTextProps {
  text: string;
  textSize: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, textSize }) => {
  return (
    <span className={`font-bold  gradient_color ${textSize}`}>
      {text}
    </span>
  );
};

export default HighlightText;
