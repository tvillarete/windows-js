import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import desktopReducer from './desktop/reducer';
import taskbarReducer from './desktop/taskbar/reducer';
import taskReducer from './task_manager/reducer';
import settingsReducer from './apps/settings/reducer';
import fileReducer from './filesystem/reducer';

const rootReducer = combineReducers({
   desktopState: desktopReducer,
   taskbarState: taskbarReducer,
   taskState: taskReducer,
   settingsAppState: settingsReducer,
   fileSystem: fileReducer,
});

const store = createStore(
   rootReducer,
   applyMiddleware(thunkMiddleware),
);

export default store;
