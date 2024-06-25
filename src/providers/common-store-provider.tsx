"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";

import { type StoreApi, useStore } from "zustand";

import {
  type CommonStore,
  createCommonStore,
  initCommonStore,
} from "@/stores/common-store";

export const CommonStoreContext = createContext<StoreApi<CommonStore> | null>(
  null
);

export interface CommonStoreProviderProps {
  children: ReactNode;
}

export const CommonStoreProvider = ({ children }: CommonStoreProviderProps) => {
  const storeRef = useRef<StoreApi<CommonStore>>();
  if (!storeRef.current) {
    storeRef.current = createCommonStore(initCommonStore());
  }

  return (
    <CommonStoreContext.Provider value={storeRef.current}>
      {children}
    </CommonStoreContext.Provider>
  );
};

export const useCommonStore = <T,>(selector: (store: CommonStore) => T): T => {
  const commonStoreContext = useContext(CommonStoreContext);

  if (!commonStoreContext) {
    throw new Error(`useCommonStore must be use within CommonStoreProvider`);
  }

  return useStore(commonStoreContext, selector);
};
