import { action, computed, makeObservable, observable, toJS } from 'mobx';
import { createContext, useContext } from 'react';

import { Symbols } from 'constants/symbols';

const elementsCount = 5;

export class QuotesStore {
  symbol = Symbols[0];
  _chartLabels = [''] as string[];
  _chartDataBidPrice = [0] as number[];
  _chartDataAskPrice = [0] as number[];

  get chartLabels() {
    return toJS(this._chartLabels);
  }
  get chartDataBidPrice() {
    return toJS(this._chartDataBidPrice);
  }

  get chartDataAskPrice() {
    return toJS(this._chartDataAskPrice);
  }

  get latestBidPrice() {
    if (this._chartDataBidPrice.length > 0) {
      return this._chartDataBidPrice[this._chartDataBidPrice.length - 1];
    }
    return 0;
  }

  get latestAskPrice() {
    if (this._chartDataAskPrice.length > 0) {
      return this._chartDataAskPrice[this._chartDataAskPrice.length - 1];
    }
    return 0;
  }

  constructor() {
    makeObservable(this, {
      symbol: observable,
      _chartDataBidPrice: observable,
      _chartDataAskPrice: observable,
      _chartLabels: observable,
      chartDataAskPrice: computed,
      chartDataBidPrice: computed,
      latestBidPrice: computed,
      latestAskPrice: computed,
      setSymbol: action,
      pushData: action,
    });
  }

  pushData = (askPrice: number, bidPrice: number, eventTime: string) => {
    const time = new Date();
    if (this._chartLabels.length < elementsCount) {
      this._chartLabels.push(eventTime);
    } else {
      this._chartLabels.shift();
      this._chartLabels.push(eventTime);
      // this._chartLabels.push(`${time.getSeconds()}.${time.getMilliseconds()}`);
    }
    if (this._chartDataBidPrice.length < elementsCount) {
      this._chartDataBidPrice.push(bidPrice);
    } else {
      this._chartDataBidPrice.shift();
      this._chartDataBidPrice.push(bidPrice);
    }
    if (this._chartDataAskPrice.length < elementsCount) {
      this._chartDataAskPrice.push(askPrice);
    } else {
      this._chartDataAskPrice.shift();
      this._chartDataAskPrice.push(askPrice);
    }
  };

  setSymbol = (value: string) => {
    this.symbol = value;
  };

  clear = () => {
    this._chartLabels = [''];
    this._chartDataAskPrice = [0];
    this._chartDataBidPrice = [0];
  };
}

export const QuotesStoreInst = new QuotesStore();
