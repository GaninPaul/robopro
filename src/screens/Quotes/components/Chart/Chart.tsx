import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import { Dimensions } from 'react-native';
import { LineChart as LineChartCommon } from 'react-native-chart-kit';
import { ChartData } from 'react-native-chart-kit/dist/HelperTypes';
import styled from 'styled-components/native';

const LineChart = styled(LineChartCommon).attrs({
  yAxisInterval: 1,
  bezier: true,
  verticalLabelRotation: -45,
  horizontalLabelRotation: -45,
  yAxisLabel: '$',
  chartConfig: {
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  },
})`` as unknown as typeof LineChartCommon;

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
