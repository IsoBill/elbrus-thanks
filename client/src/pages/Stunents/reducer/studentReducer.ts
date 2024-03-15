import type { Action, State } from '../../../redux/type';

export const initialState: State = {
  students: [],
};

export const stundentsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'students/load':
      return { ...state, students: action.payload };
    case 'students/add':
      return { ...state, students: [...state.students, action.payload] };
    case 'students/remove':
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    case 'students/update':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student,
        ),
      };
      case "students/search":
        const search=action.payload
        const regex = new RegExp(`^${search}`, 'i');
      return{
        ...state,students:state.students.filter(student=>regex.test(student.name))
      }

    default:
      return state;
  }
};
