import React, {Fragment} from 'react';
import {declMod, Bem} from 'bem-react-core';

import Header from 'e:Header';
import Text from 'e:Text';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({type: 'text'}, {
  block: 'Article',
  content({title, titleColor, description, channelName}) {
    return (
      <Fragment>
        <Header size="small" text={title} color={titleColor}/>
        <Text size="small" text={description}/>
        <Bem elem="Channel">{channelName}</Bem>
        <ButtonActions type="text" />
        <ButtonLike type="text"/>
      </Fragment>
    );
  }
});
