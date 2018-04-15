import React from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Header',
  tag: 'header',
  mods({size}) {
    return {...this.__base(...arguments), size};
  },
  content({text, color, size}) {
    return (
      <Bem elem="HeaderWrapper">
        <Bem elem="HeaderText" mods={{size}} tag="h2" style={{color}}>
          {text}
        </Bem>
      </Bem>
    );
  }
});
