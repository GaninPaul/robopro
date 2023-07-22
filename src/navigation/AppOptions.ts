import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

export const appScreensOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: true,
  cardStyleInterpolator: () => ({
    containerStyle: {
      backgroundColor: 'black',
    },
  }),
};

export const initialNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
  animationEnabled: false,
  cardOverlayEnabled: false,
  cardStyleInterpolator: undefined,
};

export const quotesOptions: Partial<StackNavigationOptions> = {
  headerMode: 'float',
  headerShown: true,
  animationEnabled: true,
  headerStyle: {
    shadowRadius: 0,
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerLeftContainerStyle: {
    margin: 20,
  },
  headerRightContainerStyle: {
    margin: 20,
  },
  ...TransitionPresets.SlideFromRightIOS,
};

export const currencySelectionOptions: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};
