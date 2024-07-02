import { createStore } from "zustand/vanilla";
import { immer } from "zustand/middleware/immer";

export type helloName = string;
export type helloOptions = {
  haveAGoodDay: boolean;
  haveAGoodNight: boolean;
  nestedClickers: {
    all: boolean;
  };
};

export type CommonState = {
  helloName: helloName;
  helloOptions: helloOptions;
};

export type CommonActions = {
  editHelloName: (newhelloName: helloName) => void;
  editHelloOptions: (newHelloOptions: helloOptions) => void;
  generateHelloString: (string: string) => string;
  iWantItAll: (value: boolean) => void;
};

export type CommonStore = CommonState & CommonActions;

export const initCommonStore = (): CommonState => {
  return {
    helloName: "LikeDreamwalker",
    helloOptions: {
      haveAGoodDay: true,
      haveAGoodNight: true,
      nestedClickers: {
        all: true,
      },
    },
  };
};

export const defaultInitState: CommonState = {
  helloName: "LikeDreamwalker",
  helloOptions: {
    haveAGoodDay: true,
    haveAGoodNight: true,
    nestedClickers: {
      all: true,
    },
  },
};

export const createCommonStore = (
  initState: CommonState = defaultInitState
) => {
  return createStore<CommonStore>()(
    immer((set, get) => ({
      ...initState,
      editHelloName: (newhelloName: helloName) => {
        set({ helloName: newhelloName });
      },
      editHelloOptions: (newHelloOptions: helloOptions) => {
        // Use a normal way to update state
        set({ helloOptions: { ...get().helloOptions, ...newHelloOptions } });
      },
      iWantItAll: (value: boolean) => {
        // Also you can use immer to update the nested state directly
        set((state) => {
          state.helloOptions.nestedClickers.all = value;
          state.helloOptions.haveAGoodDay = value;
          state.helloOptions.haveAGoodNight = value;
        });
      },
      generateHelloString: (string) => {
        const { helloName, helloOptions } = get();
        const greetings = helloName ? `Hello, ${helloName}!` : "Hello, there!";
        const wishContent = `${
          helloOptions.haveAGoodDay ? " Have a good day." : ""
        }${helloOptions.haveAGoodNight ? " Have a good night." : ""}`;
        return string
          ? `${greetings}${wishContent} ${string}`
          : `${greetings}${wishContent}`;
      },
    }))
  );
};
