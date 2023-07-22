import React from 'react';

import {Button} from '../../components/Button/Button';

import {Container, Footer} from './Quotes.style';

export const Quotes = () => {
  const onPress = () => {
    console.log('onPress');
  };
  return (
    <Container>
      <Footer>
        <Button onPress={onPress}>Check</Button>
      </Footer>
    </Container>
  );
};
