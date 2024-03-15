import { combineReducers } from 'redux';
import { stundentsReducer } from '../pages/Stunents/reducer/studentReducer';
import { authReducer } from '../pages/Auth/reducer/reducerAuth';

// Собираем все редьюсеры в один
const rootReducer = combineReducers({
  students: stundentsReducer,
  auth: authReducer,
});

export default rootReducer;
