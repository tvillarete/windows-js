const initialState = {
   launched: [{ id: 'Explorer', instance: 1, props: {} }],
   minimized: [],
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
         console.log(`launching instance ${instanceNum}`);
         return state.launched.includes(action.id)
            ? state
            : {
                 ...state,
                 launched: [
                    ...state.launched,
                    { id: action.id, instance: instanceNum, props: action.props },
                 ],
              };
      case 'CLOSE_APP':
         index = state.launched.findIndex(app => action.id === app.id);
      console.log(index);
         return {
            ...state,
            launched: [
               ...state.launched.slice(0, index),
               ...state.launched.slice(index + 1),
            ],
         };
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
