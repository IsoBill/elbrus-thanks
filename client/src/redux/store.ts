import { legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
import { useDispatch } from 'react-redux';

const store = createStore(rootReducer);

type AppDispatch = typeof store.dispatch;

//чтобы диспатч подсказывал type
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
