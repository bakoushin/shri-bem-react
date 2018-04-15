import React from 'react';
import {declMod} from 'bem-react-core';

export default declMod({size: 'large'}, {
  block: 'Article',
  elem: 'Picture',
  content({src, alt}) {
    const [file, ext] = src.split('.');
    return (
      <img
        srcSet={`
          ${file}@3x.${ext} 696w,
          ${file}@2x.${ext} 646w,
          ${file}.${ext} 232w
        `}
        sizes="(min-width: 1200px) 595px,
          (min-width: 780px) 464px,
          calc(100vw - 16px * 2)"
        src={src}
        alt={alt}
      />
    );
  }
});
