import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Dimensions } from 'react-native';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';

import { LineChart } from './Chart.style';

interface Props {
  data: ChartData;
  yAxisLabel?: string;
  yAxisSuffix?: string;
}

export const Chart = ({ data }: Props) => {
  const headerHeight = useHeaderHeight();
  const height = (Dimensions.get('window').height - headerHeight) / 2;
  const width = Dimensions.get('window').width - 30;

  return <LineChart width={width} height={height} data={data} />;
};
