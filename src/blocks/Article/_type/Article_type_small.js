import React, {Fragment} from 'react';
import {declMod, Bem} from 'bem-react-core';

import Header from 'e:Header';
import Picture from 'e:Picture';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({type: 'small'}, {
  block: 'Article',
  content({title, titleColor, image}) {
    return (
      <Fragment>
        <Bem elem="HeaderContainer">
          <Header size="small" text={title} color={titleColor}/>
          <ButtonActions type="small" />
        </Bem>
        <Picture size="small" src={image} alt={title} />
        <ButtonLike type="small"/>
      </Fragment>
    );
  }
});
