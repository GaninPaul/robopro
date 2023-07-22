import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {Animated} from 'react-native';

import {IS_IOS} from '../constants/common';

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

export const entryScreenOptions: StackNavigationOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export const modalScreenOptions = (top: number): StackNavigationOptions => ({
  headerShown: false,
  cardStyle: {backgroundColor: 'transparent'},
  cardOverlayEnabled: true,
  gestureEnabled: true,
  gestureResponseDistance: (IS_IOS ? top : 0) + 72,
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({current, next, inverted, layouts: {screen}}) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'clamp',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateY: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1],
                outputRange: [screen.height, 0],
                extrapolate: 'clamp',
              }),
              inverted,
            ),
          },
        ],
      },
      overlayStyle: {
        opacity: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.9],
          extrapolate: 'clamp',
        }),
      },
    };
  },
});

export const profileScreenOptions: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardStyle: {borderTopLeftRadius: 16, borderTopRightRadius: 16},
  ...TransitionPresets.ModalPresentationIOS,
};

export const modalNoGesturesNavigatorOptions = (
  top: number,
): StackNavigationOptions => ({
  ...modalScreenOptions(top),
  gestureEnabled: false,
});
