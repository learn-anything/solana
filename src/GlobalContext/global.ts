import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type GlobalState = {
  expandItemId?: string;
  showItemInfo: boolean;
  showCart: boolean;
};

// various global state
export function createGlobalState() {
  const [state, setState] = createStore<GlobalState>({
    showItemInfo: false,
    showCart: false,
  });

  return {
    state,
    setShowItemInfo: (boolean: boolean) => {
      setState({ showItemInfo: boolean });
    },
    setShowCart: (boolean: boolean) => {
      setState({ showCart: boolean });
    },
    set: setState,
  } as const;
}

const GlobalStateCtx = createContext<ReturnType<typeof createGlobalState>>();

export const GlobalStateProvider = GlobalStateCtx.Provider;

export const useGlobalState = () => {
  const ctx = useContext(GlobalStateCtx);
  if (!ctx) throw new Error("useGlobalState must be used within UserProvider");
  return ctx;
};
