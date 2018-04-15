import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import Header from 'e:Header';
import Picture from 'e:Picture';
import Text from 'e:Text';
import ButtonLike from 'e:ButtonLike';
import ButtonActions from 'e:ButtonActions';

export default declMod({ type: 'medium' }, {
    block: 'Article',
    content() {
      return (
        <Fragment>
          <Bem elem="Wrapper">
            <Bem elem="HeaderContainer">
              <Header text={this.props.title} color={this.props.titleColor}/>
            </Bem>
            <Picture size="medium" src={this.props.image} alt={this.props.title}/>
            <ButtonActions type="medium" />
          </Bem>
          <Text size="medium" text={this.props.description}/>
          <ButtonLike type="medium"/>
        </Fragment>
      );
    }
});
