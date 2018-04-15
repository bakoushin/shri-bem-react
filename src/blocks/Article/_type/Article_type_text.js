import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Text from 'e:Text';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({type: 'text'}, {
    block: 'Article',
    content() {
      return (
        <Fragment>
          <Header size="small" text={this.props.title} color={this.props.titleColor}/>
          <Text size="small" text={this.props.description}/>
          <Bem elem="Channel">{this.props.channelName}</Bem>
          <ButtonActions type="text" />
          <ButtonLike type="text"/>
        </Fragment>
      );
    }
});
