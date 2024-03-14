import { combineReducers } from 'redux';
import { stundentsReducer } from '../pages/Stunents/reducer/studentReducer';

// Собираем все редьюсеры в один
const rootReducer = combineReducers({
  students: stundentsReducer,
});

export default rootReducer;
