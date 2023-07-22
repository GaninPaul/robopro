import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const PickerContainer = styled(Picker).attrs({
  itemStyle: {
    fontSize: 25,
    color: 'green',
    textAlign: 'center',
  },
})`
  width: 100%;
` as unknown as typeof Picker;
