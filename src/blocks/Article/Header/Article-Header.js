import React from 'react';
import {decl, Bem} from 'bem-react-core';

export default decl({
  block: 'Article',
  elem: 'Header',
  tag: 'header',
  content({text, color}) {
    return (
      <Bem elem="HeaderWrapper">
        <Bem elem="HeaderText" tag="h2" style={{color}}>
          {text}
        </Bem>
      </Bem>
    );
  }
});
