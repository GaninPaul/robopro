import { StackNavigationProp } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useLayoutEffect } from 'react';

import { QuotesStoreInst } from 'stores/QuotesStore';

import { AppStackParams } from 'navigation/AppNavigator';
import { APP_ROUTES } from 'navigation/AppRoutes';

import { Chart } from './components/Chart/Chart';
import { QuotesControllerInst } from './services/QuotesController';

import { Container, Content, Text } from './Quotes.style';

interface Props {
  navigation: StackNavigationProp<AppStackParams, APP_ROUTES.QUOTES>;
}
export const Quotes = observer(({ navigation }: Props) => {
  const {
    chartLabels,
    chartDataBidPrice,
    chartDataAskPrice,
    latestAskPrice,
    symbol,
    clear,
    latestBidPrice,
  } = QuotesStoreInst;

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Exchange Rates' });
  });

  useEffect(() => {
    QuotesControllerInst.start();
    return () => {
      QuotesControllerInst.stop();
      clear();
    };
  }, []);

  return (
    <Container>
      <Content>
        <Text>Сurrency: {symbol}</Text>
        <Text>AskPrice: ${latestAskPrice}</Text>
        <Text>BidPrice: ${latestBidPrice}</Text>
        <Chart
          data={{
            labels: chartLabels,
            datasets: [
              { data: chartDataBidPrice },
              { data: chartDataAskPrice },
            ],
          }}
        />
      </Content>
    </Container>
  );
});
