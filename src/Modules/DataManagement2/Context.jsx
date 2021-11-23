import { createContext } from "react";

export const initValue = {
  Footman: {
    HP: 20,
    Att: 8,
    Def: 6,
    Mag: 0,
    Res: 1,
  },

  Mage: {
    HP: 12,
    Att: 1,
    Def: 1,
    Mag: 14,
    Res: 8,
  },
};

export const state = createContext(initValue);
export const dispatch = createContext(actions);
