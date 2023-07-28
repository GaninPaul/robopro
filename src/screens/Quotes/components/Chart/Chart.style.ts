import { LineChart as LineChartCommon } from 'react-native-chart-kit';
import styled from 'styled-components/native';

export const LineChart = styled(LineChartCommon).attrs({
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
