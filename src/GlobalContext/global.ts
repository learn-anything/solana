import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

type GlobalState = {
  expandItemId?: string
}

// various global state
export function createGlobalState() {
  const [state, setState] = createStore<GlobalState>({})

  return {
    state,
    set: setState
  } as const
}

const GlobalStateCtx = createContext<ReturnType<typeof createGlobalState>>()

export const GlobalStateProvider = GlobalStateCtx.Provider

export const useGlobalState = () => {
  const ctx = useContext(GlobalStateCtx)
  if (!ctx) throw new Error("useGlobalState must be used within UserProvider")
  return ctx
}
