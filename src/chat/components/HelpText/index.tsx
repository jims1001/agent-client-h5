/* eslint-disable */
import React from 'react';

interface HelpTextProps {
  children?: string;
}

export const HelpText: React.FC = (props: HelpTextProps) => {
  // @ts-ignore
  const { children, ...others } = props;
  return (
    <div className="HelpText" {...others}>
      {children}
    </div>
  );
};
