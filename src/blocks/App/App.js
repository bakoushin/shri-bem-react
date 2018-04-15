import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';

import Logo from 'e:Logo';
import Feed from 'b:Feed';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Logo/>
        <Feed/>
      </Fragment>
    );
  }
});
