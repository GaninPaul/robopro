export interface BookTickerType {
  e: string; // Event type
  u: number; // Order book update Id
  s: string; // Symbol
  ps: string; // Pair
  b: string; // Best bid price
  B: string; // Best bid qty
  a: string; // Best ask price
  A: string; // Best ask qty
  T: number; // Transaction time
  E: number; // Event time
}

export interface ValidBookTickerType extends BookTickerType {
  askPrice?: number;
  bidPrice?: number;
  eventTime?: string;
}
