import { Dispatch, createContext } from 'react';
import { Action, State } from '../../reducer/type';
import { initialState } from '../../reducer/reducer';

export type StateContext = {
  state: State;
  dispatch: Dispatch<Action>;
  // tasks: Task[];
  // setTasks: (value: SetStateAction<Task[]>) => void;
};

export const stateContext: StateContext = {
  state: initialState,
  dispatch: () => {},
  // tasks: [],
  // setTasks: () => {},
};

export const AppContext = createContext(stateContext);
