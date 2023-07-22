import styled from 'styled-components/native';

export const ButtonPressable = styled.Pressable``;

interface IContainer {
  defaultColor: string;
  pressedColor: string;
  height: number;
  pressed: boolean;
  disabled: boolean;
}

export const Container = styled.View<IContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  width: auto;
  height: ${({height}) => height}px;

  background-color: ${({
    pressed,
    disabled,
    theme,
    pressedColor,
    defaultColor,
  }) =>
    disabled ? theme.buttonsDisabled : pressed ? pressedColor : defaultColor};
  border-radius: 12px;
`;

interface IText {
  color: string;
  disabled: boolean;
  startIcon?: boolean;
}

export const Text = styled.Text<IText>`
  text-align: center;
  color: ${({color, theme, disabled}) =>
    disabled ? theme.buttonsTextDisabled : color};
  margin-left: ${({startIcon}) => (startIcon ? 8 : 0)}px;
`;
