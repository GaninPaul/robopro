import Toast from 'react-native-toast-message';

import { QuotesStoreInst } from 'stores/QuotesStore';

import { throttle } from 'utils/throttle';

import { validateData } from '../utils/validateData';

const delay = 200;

class QuotesController {
  webSocketInstance: WebSocket | null = null;

  subscribe = () => {
    this.webSocketInstance?.send(
      JSON.stringify({
        method: 'SUBSCRIBE',
        params: [`${QuotesStoreInst.symbol.toLowerCase()}@bookTicker`],
        id: 1,
      }),
    );
  };

  messageListener = (msg: WebSocketMessageEvent) => {
    try {
      const { askPrice, bidPrice, eventTime } = validateData(
        JSON.parse(msg.data),
      );
      if (askPrice && bidPrice && eventTime) {
        QuotesStoreInst.pushData(askPrice, bidPrice, eventTime);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
        text2: `${error}`,
      });
    }
  };

  throttleMessageListener = throttle(this.messageListener, delay);

  start = () => {
    this.webSocketInstance = new WebSocket('wss://dstream.binance.com/ws');
    this.webSocketInstance.addEventListener('open', this.subscribe);
    this.webSocketInstance.addEventListener(
      'message',
      this.throttleMessageListener,
    );
  };

  unsubscribe = () => {
    this.webSocketInstance?.send(
      JSON.stringify({
        method: 'UNSUBSCRIBE',
        params: [`${QuotesStoreInst.symbol.toLowerCase()}@bookTicker`],
        id: 1,
      }),
    );
  };

  close = () => {
    this.webSocketInstance?.removeEventListener('open', this.subscribe);
    this.webSocketInstance?.removeEventListener(
      'message',
      this.throttleMessageListener,
    );
    this.webSocketInstance?.close();
  };

  stop = () => {
    this.unsubscribe();
    this.close();
  };
}

export const QuotesControllerInst = new QuotesController();
