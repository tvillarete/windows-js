import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import desktopReducer from './desktop/reducer';
import taskbarReducer from './desktop/taskbar/reducer';

const rootReducer = combineReducers({
   desktopState: desktopReducer,
   taskbarState: taskbarReducer,
});

const store = createStore(
   rootReducer,
   applyMiddleware(thunkMiddleware),
);

export default store;
