import React from 'react';

type Props = {
  originalText: string;
  className: string;
};
const HightLightText = ({ originalText, className }: Props) => {
  const formatText = (text: string) => {
    const parts = text.split(/\/\/(.*?)\/\//g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <p key={index} className={`text-orange-500 ${className}`}>
            {part}
          </p>
        );
      } else {
        return (
          <p key={index} className={className}>
            {part}
          </p>
        );
      }
    });
  };
  return <div className={`block ${className}`}>{formatText(originalText)}</div>;
};

export default HightLightText;
