import React from 'react';
import {decl} from 'bem-react-core';

import Button from 'b:Button';

import 'm:type=large';
import 'm:type=medium';
import 'm:type=small';
import 'm:type=text';

export default decl({
  block: 'Article',
  elem: 'ButtonLike',
  replace({type}) {
    return <Button type="like" mix={{
      block: 'Article',
      elem: 'ButtonLike',
      mods: {type}
    }}/>;
  },
  mods({type}) {
    return {...this.__base(...arguments), type};
  }
});
