/* eslint-disable */
import React, {ReactNode} from 'react';

// @ts-ignore
export const Label: React.FC = (props : any) => {
  const { children, ...other } = props;
  return (
    <label className="Label" {...other}>
      {children}
    </label>
  );
};
