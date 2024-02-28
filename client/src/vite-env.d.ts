declare module '*.scss' {
  interface IClassName {
    [className: string]: string;
  }
  const className: IClassName;
  export = className;
}

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;

  export default ReactComponent;
}
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

/// <reference types="vite/client" />
