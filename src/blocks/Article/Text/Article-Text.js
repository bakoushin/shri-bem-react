import { decl } from 'bem-react-core';

import 'm:size=small';
import 'm:size=medium';
import 'm:size=large';

export default decl({
  block: 'Article',
  elem: 'Text',
  tag: 'p',
  mods({ size }) {
    return { ...this.__base(...arguments), size };
  },
  content() {
    return this.props.text;
  }
});
