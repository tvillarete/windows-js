import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import desktopReducer from './desktop/reducer';
import taskbarReducer from './desktop/taskbar/reducer';
import taskReducer from './task_manager/reducer';

const rootReducer = combineReducers({
   desktopState: desktopReducer,
   taskbarState: taskbarReducer,
   taskState: taskReducer,
});

const store = createStore(
   rootReducer,
   applyMiddleware(thunkMiddleware),
);

export default store;
