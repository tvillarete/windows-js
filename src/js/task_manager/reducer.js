const initialState = {
   launched: [ 'Settings' ],
   minimized: [],
};

const taskReducer = (state = initialState, action) => {
   let index;
   switch (action.type) {
      case 'LAUNCH_APP':
         return state.launched.includes(action.id)
            ? state
            : {
                 ...state,
                 launched: [...state.launched, action.id],
              };
      case 'CLOSE_APP':
         index = state.launched.findIndex(id => action.id === id);
         return {
            ...state,
            launched: [
               ...state.launched.slice(0, index),
               ...state.launched.slice(index + 1),
            ],
         };
      case 'MINIMIZE_APP':
         index = state.minimized.findIndex(id => action.id === id);
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
