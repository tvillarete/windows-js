export const launchApp = (id, config) => ({ type: 'LAUNCH_APP', id, config });
export const closeApp = id => { 
   return dispatch => {
      dispatch({type: 'CLOSE_APP_REQUEST', id});
      setTimeout(() => {
         dispatch({ type: 'CLOSE_APP_SUCCESS', id });
      }, 200);
   };
};
export const minimizeApp = id => ({ type: 'MINIMIZE_APP', id });
