import { Action, State } from './type';

export const initialState: State = {
  students: [],
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'students/load':
      return { ...state, students: action.payload };
    case 'students/add':
      return { ...state, students: [...state.students, action.payload] };
    case 'students/remove':
      return { ...state, students: state.students.filter((student) => student.id !== action.payload) };
    case 'students/update':
      return {
        ...state,
        students: state.students.map((student) => (student.id === action.payload.id ? action.payload : student)),
      };
    default:
      return state;
  }
};
