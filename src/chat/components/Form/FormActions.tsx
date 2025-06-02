import React from 'react';
import clsx from 'clsx';

export const FormActions: React.FC = (props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { children, ...other } = props;
  return (
    <div className={clsx('FormActions')} {...other}>
      {children}
    </div>
  );
};
