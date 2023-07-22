import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { CurrencySelection } from 'screens/CurrencySelection/CurrencySelection';
import { Quotes } from 'screens/Quotes/Quotes';

import {
  appScreensOptions,
  currencySelectionOptions,
  initialNavigatorOptions,
  quotesOptions,
} from './AppOptions';
import { APP_ROUTES } from './AppRoutes';

const Stack = createStackNavigator<AppStackParams>();

export interface AppStackParams extends Record<string, object | undefined> {
  [APP_ROUTES.QUOTES]: undefined;
  [APP_ROUTES.CURRENCY_SELECTION]: undefined;
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={appScreensOptions}>
      <Stack.Group screenOptions={initialNavigatorOptions}>
        <Stack.Screen
          component={CurrencySelection}
          name={APP_ROUTES.CURRENCY_SELECTION}
          options={currencySelectionOptions}
        />
        <Stack.Screen
          component={Quotes}
          name={APP_ROUTES.QUOTES}
          options={quotesOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
