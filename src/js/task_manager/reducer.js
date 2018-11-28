const initialState = {
   launched: [{ id: 'Explorer', instance: 1, props: {} }],
   minimized: [],
   closing: [],
};

const taskReducer = (state = initialState, action) => {
   let index;
   switch (action.type) {
      case 'LAUNCH_APP':
         let instanceNum = 0;
         for (let app of state.launched) {
            if (app.id === action.id) {
               instanceNum++;
            }
         }
         return state.launched.includes(action.id)
            ? state
            : {
                 ...state,
                 launched: [
                    ...state.launched,
                    { id: action.id, instance: instanceNum, config: action.config },
                 ],
              };
      case 'CLOSE_APP_REQUEST':
         index = state.launched.findIndex(app => action.id === app.id);
         return {
            ...state,
            closing: [
               ...state.closing, action.id
            ],
         };
      case 'CLOSE_APP_SUCCESS':
         index = state.closing.findIndex(id => action.id === id);
         let launchIndex = state.launched.findIndex(app => action.id === app.id);

         return {
            ...state,
            launched: [
               ...state.launched.slice(0, launchIndex),
               ...state.launched.slice(launchIndex + 1),
            ],
            closing: [
               ...state.closing.slice(0, index),
               ...state.closing.slice(index + 1),
            ],
         }
      case 'MINIMIZE_APP':
         index = state.minimized.findIndex(app => action.id === app.id);
         return state.minimized.includes(action.id)
            ? {
                 ...state,
                 minimized: [
                    ...state.minimized.slice(0, index),
                    ...state.minimized.slice(index + 1),
                 ],
              }
            : {
                 ...state,
                 minimized: [...state.minimized, action.id],
              };
      default:
         return state;
   }
};

export default taskReducer;
