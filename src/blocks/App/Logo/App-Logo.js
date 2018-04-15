import {decl} from 'bem-react-core';

import logo from './App-Logo.png';
import logo2x from './App-Logo@2.png';
import logo3x from './App-Logo@3.png';

export default decl({
  block: 'App',
  elem: 'Logo',
  tag: 'img',
  attrs: {
    srcSet: `${logo3x} 134w,
        ${logo2x} 90w,
        ${logo} 45w`,
    sizes: `(min-width: 1200px) 134px,
        91px`,
    src: logo,
    alt: 'Яндекс.Дзен'
  }
});
