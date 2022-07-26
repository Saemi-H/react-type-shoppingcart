/// <reference types="react-scripts" />

declare module 'react-query';
declare module '*.less' {
    const resource: {[key: string]: string};
    export = resource;
  }