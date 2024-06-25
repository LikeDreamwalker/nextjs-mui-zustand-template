import { createStore } from "zustand/vanilla";

export type helloName = string;
export type helloOptions = {
  haveAGoodDay: boolean;
  haveAGoodNight: boolean;
};

export type CommonState = {
  helloName: helloName;
  helloOptions: helloOptions;
};

export type CommonActions = {
  editHelloName: (newhelloName: helloName) => void;
  editHelloOptions: (newHelloOptions: helloOptions) => void;
  generateHelloString: (string: string) => string;
};

export type CommonStore = CommonState & CommonActions;

export const initCommonStore = (): CommonState => {
  return {
    helloName: "LikeDreamwalker",
    helloOptions: {
      haveAGoodDay: true,
      haveAGoodNight: true,
    },
  };
};

export const defaultInitState: CommonState = {
  helloName: "LikeDreamwalker",
  helloOptions: {
    haveAGoodDay: true,
    haveAGoodNight: true,
  },
};

export const createCommonStore = (
  initState: CommonState = defaultInitState
) => {
  return createStore<CommonStore>()((set, get) => ({
    ...initState,
    editHelloName: (newhelloName: helloName) => {
      set({ helloName: newhelloName });
    },
    editHelloOptions: (newHelloOptions: helloOptions) => {
      set({ helloOptions: { ...get().helloOptions, ...newHelloOptions } });
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
  }));
};
