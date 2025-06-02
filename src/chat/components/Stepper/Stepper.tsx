import React from 'react';
import clsx from 'clsx';
import type {  StepStatus } from './Step';

export type StepperProps = {
  className?: string;
  current?: number;
  status?: StepStatus;
  inverted?: boolean;
  children?: React.ReactNode;
};

export const Stepper = React.forwardRef<HTMLUListElement, StepperProps>((props, ref) => {

  return (
    <ul className={clsx('Stepper')} ref={ref} >

    </ul>
  );
});
