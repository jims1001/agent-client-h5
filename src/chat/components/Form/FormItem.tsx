/* eslint-disable */
import React, {ReactNode} from 'react';
import clsx from 'clsx';
import { Label } from '../Label';
import { HelpText } from '../HelpText';

export type FormItemProps = {
  label?: string | React.ReactNode;
  help?: string;
  required?: boolean;
  invalid?: boolean;
  hidden?: boolean;
  children?: ReactNode;
};

export const FormItem: React.FC<FormItemProps> = (props) => {
  // @ts-ignore
  const { label, help, required, invalid, hidden, children } = props;

  return (
    <div className={clsx('FormItem', { required, 'is-invalid': invalid })} hidden={hidden}>

      {label && <Label>{}</Label>}
      {children}
      {help && <HelpText>{}</HelpText>}
    </div>
  );
};
