import {decl} from 'bem-react-core';

import 'm:type=actions';
import 'm:type=like';

export default decl({
  block: 'Button',
  tag: 'button',
  mods({type}) {
    return {type};
  }
});
