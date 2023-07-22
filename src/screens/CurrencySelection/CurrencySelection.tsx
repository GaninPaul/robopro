import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';

import { QuotesStoreInst } from 'stores/QuotesStore';

import { AppStackParams } from 'navigation/AppNavigator';
import { APP_ROUTES } from 'navigation/AppRoutes';

import { Symbols } from 'constants/symbols';

import { Button } from 'components/Button/Button';
import { Picker } from 'components/Picker/Picker';

import { Container, Content, Footer, Title } from './CurrencySelection.style';

interface Props {
  navigation: StackNavigationProp<
    AppStackParams,
    APP_ROUTES.CURRENCY_SELECTION
  >;
}
export const CurrencySelection = observer(({ navigation }: Props) => {
  const { symbol, setSymbol, clear } = QuotesStoreInst;

  const onPress = () => {
    navigation.navigate(APP_ROUTES.QUOTES);
  };

  useEffect(() => {
    clear();
  }, []);

  return (
    <Container>
      <Content>
        <Title>Select symbol</Title>
        <Picker
          currrentValue={symbol}
          values={Symbols}
          onChange={value => {
            setSymbol(value);
          }}
        />
      </Content>
      <Footer>
        <Button onPress={onPress}>Check quotes</Button>
      </Footer>
    </Container>
  );
});
