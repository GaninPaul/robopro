import React from 'react';
import {Button} from '../../components/Button/Button';

import {Container, Footer} from './CurrencySelection.style';

export const CurrencySelection = () => {
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
