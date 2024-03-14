import { Action, State } from './type';

export const initialState: State = {
  tasks: [],
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'tasks/load':
      return { ...state, tasks: action.payload };
    case 'tasks/add':
      return { ...state, tasks: [...state.tasks, action.payload] };
    case 'tasks/remove':
      return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
    case 'tasks/update':
      return {
        ...state,
        tasks: state.tasks.map((task) => (task.id === action.payload.id ? action.payload : task)),
      };
    default:
      return state;
  }
};
