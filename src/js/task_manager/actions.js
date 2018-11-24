export const launchApp = (id, props) => ({ type: 'LAUNCH_APP', id, props });
export const closeApp = id => ({ type: 'CLOSE_APP', id });
export const minimizeApp = id => ({ type: 'MINIMIZE_APP', id });
