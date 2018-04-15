import React, {Fragment} from 'react';
import {decl} from 'bem-react-core';

import Article from 'b:Article';

import data from '../../data';

const types = {
  'l': 'large',
  'm': 'medium',
  's': 'small'
};

const articles = data.map((item, index) => {
  const {title, titleColor, image, description, channelName, size} = item;
  return <Article
    type={image? types[size] : 'text'}
    title={title}
    titleColor={titleColor}
    image={image}
    description={description}
    channelName={channelName}
    key={index}
  />;
});

export default decl({
  block: 'Feed',
  content() {
    return (
      <Fragment>
        {articles}
      </Fragment>
    );
  }
});
