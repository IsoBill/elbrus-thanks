import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';

// создаем стор
const store = createStore(rootReducer);

//чтобы диспатч подсказывал type
type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
