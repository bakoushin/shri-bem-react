import { decl } from 'bem-react-core';

import 'b:Button';

import 'm:type=large';
import 'm:type=medium';
import 'm:type=small';
import 'm:type=text';

export default decl({
  block: 'Article',
  elem: 'ButtonActions',
  tag: 'button',
  mix() {
    return {
      block: 'Button',
      mods: {type: 'actions'}
    };
  },
  mods({ type }) {
    return { ...this.__base(...arguments), type };
  }
});
