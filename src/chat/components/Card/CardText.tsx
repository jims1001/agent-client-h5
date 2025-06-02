import React, {ReactNode} from 'react';
import clsx from 'clsx';

export type CardTextProps = {
  className?: string;
  children?: ReactNode;
};

export const CardText: React.FC<CardTextProps> = (props) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardText', className)} {...other}>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};
