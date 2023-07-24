import { BookTickerType, ValidBookTickerType } from '../types/binanceTypes';

export function validateData(data: BookTickerType): ValidBookTickerType {
  let askPrice;
  let bidPrice;
  let eventTime;
  if (data.a) {
    askPrice = parseFloat(data.a);
  }
  if (data.b) {
    bidPrice = parseFloat(data.b);
  }
  if (data.E) {
    const time = new Date(data.E);
    eventTime = `${time.getSeconds()}.${time.getMilliseconds()}`;
  }
  return { ...data, askPrice, bidPrice, eventTime };
}
