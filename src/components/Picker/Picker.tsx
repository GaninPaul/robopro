import { Picker as PickerCommon } from '@react-native-picker/picker';
import React, { memo } from 'react';

import { PickerContainer } from './Picker.style';

interface Props {
  currrentValue: string;
  values: string[];
  onChange: (value: string) => void;
}

export const Picker = memo(({ currrentValue, values, onChange }: Props) => {
  const onValueChange = (value: string, _: number): void => {
    onChange(value);
  };

  return (
    <PickerContainer
      selectedValue={currrentValue}
      onValueChange={onValueChange}>
      {values.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <PickerCommon.Item key={index} label={value} value={value} />
      ))}
    </PickerContainer>
  );
});
