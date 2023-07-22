import {computed, makeAutoObservable} from 'mobx';
// import {createContext, useContext} from 'react';

class RootStore {
  isMenuVisible = false;
  constructor() {
    makeAutoObservable<RootStore, 'isMenuVisible'>(this, {
      isMenuVisible: computed,
    });
  }
}

export const RootInstance = new RootStore();

// export type RootInstance = Instance<typeof RootModel>;
// const RootStoreContext = createContext<null | RootInstance>(null);

// export const {Provider} = RootStoreContext;

// export function useMst() {
//   const store = useContext(RootStoreContext);
//   if (store === null) {
//     throw new Error('Store cannot be null, please add a context provider');
//   }
//   return store;
// }
