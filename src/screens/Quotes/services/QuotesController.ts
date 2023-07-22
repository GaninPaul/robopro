import { QuotesStoreInst } from 'stores/QuotesStore';

import { throttle } from 'utils/throttle';

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
      const data = JSON.parse(msg.data);
      const askPrice = data.a;
      const bidPrice = data.b;
      if (
        askPrice !== undefined &&
        askPrice !== null &&
        bidPrice !== undefined &&
        bidPrice !== null
      ) {
        QuotesStoreInst.pushData(askPrice, bidPrice);
      }
    } catch (error) {
      console.log(error);
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
