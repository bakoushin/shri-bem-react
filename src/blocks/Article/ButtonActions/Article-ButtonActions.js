import React from 'react';
import {decl} from 'bem-react-core';

import Button from 'b:Button';

import 'm:type=large';
import 'm:type=medium';
import 'm:type=small';
import 'm:type=text';

export default decl({
  block: 'Article',
  elem: 'ButtonActions',
  replace({type}) {
    return <Button type="actions" mix={{
      block: 'Article',
      elem: 'ButtonActions',
      mods: {type}
    }}/>;
  },
  mods({type}) {
    return {...this.__base(...arguments), type};
  }
});
