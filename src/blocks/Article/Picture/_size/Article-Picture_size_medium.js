import React from 'react';
import { declMod } from 'bem-react-core';

export default declMod({ size : 'medium' }, {
  block : 'Article',
  elem: 'Picture',
  content() {
    const [file, ext] = this.props.src.split('.');
    return (
      <img
        srcSet={`
          ${file}@3x.${ext} 516w,
          ${file}@2x.${ext} 344w,
          ${file}.${ext} 172w
        `}
        sizes="(min-width: 1200px) calc((900px - 16px) / 2),
          (min-width: 780px) calc((704px - 16px) / 2 ),
          (min-width: 580px) calc((100vw - 16px * 3) / 2),
          calc(100vw - 16px * 2)"
        src={this.props.src}
        alt={this.props.alt}
      />
    );
  }
});
