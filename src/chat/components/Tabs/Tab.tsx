import React from 'react';

export interface TabProps {
  label: string;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Tab: React.FC<TabProps> = ({ children }) => <div>{children}</div>;
