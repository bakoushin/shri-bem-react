import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Picture from 'e:Picture';
import Text from 'e:Text';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({type: 'large'}, {
    block: 'Article',
    content({title, titleColor, image, description}) {
      return (
        <Fragment>
          <Header size="large" text={title} color={titleColor}/>
          <Bem elem="PictureContainer">
            <Picture size="large" src={image} alt={title}/>
            <ButtonActions type="large" />
          </Bem>
          <Text size="large" text={description}/>
          <ButtonLike type="large"/>
        </Fragment>
      );
    }
});
