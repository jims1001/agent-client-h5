import React from 'react';
import ReactDOM from 'react-dom';

export function mountComponent(Comp: React.ReactElement, root = document.body) {
  const div = document.createElement('div');
  root.appendChild(div);

  const Clone = React.cloneElement(Comp, {
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  ReactDOM.render(Clone, div);

  return div;
}
