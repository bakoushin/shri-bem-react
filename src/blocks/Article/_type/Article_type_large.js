import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Picture from 'e:Picture';
import Text from 'e:Text';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({type: 'large'}, {
    block: 'Article',
    content() {
      return (
        <Fragment>
          <Header size="large" text={this.props.title} color={this.props.titleColor}/>
          <Bem elem="PictureContainer">
            <Picture size="large" src={this.props.image} alt={this.props.title}/>
            <ButtonActions type="large" />
          </Bem>
          <Text size="large" text={this.props.description}/>
          <ButtonLike type="large"/>
        </Fragment>
      );
    }
});
