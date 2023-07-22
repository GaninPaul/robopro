import React from 'react';
import { PressableProps, TextStyle, ViewStyle } from 'react-native';

import { ButtonPressable, Container, Text } from './Button.styles';

export interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  disabled?: boolean;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  loading?: boolean;
}

export const Button = ({
  children,
  disabled = false,
  style,
  containerStyle,
  textStyle,
  loading,
  onPress,
  ...props
}: ButtonProps) => {
  const buttonTheme = {
    default: '#23786E',
    pressed: '#0A5046',
    text: '#FFFFFF',
  };
  const buttonSize = { height: 48, textType: 'headlineBold' };

  return (
    <ButtonPressable
      disabled={loading || disabled}
      style={containerStyle}
      onPress={onPress}
      {...props}>
      {({ pressed }: { pressed: boolean }) => (
        <Container
          defaultColor={buttonTheme.default}
          disabled={disabled}
          height={buttonSize.height}
          pressed={pressed}
          pressedColor={buttonTheme.pressed}
          style={style}>
          <Text color={buttonTheme.text} disabled={disabled} style={textStyle}>
            {children}
          </Text>
        </Container>
      )}
    </ButtonPressable>
  );
};
