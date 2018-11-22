const initialState = {
   viewStack: [
      'MainView'
   ],
}

const settingsReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'PUSH_VIEW':
         return {
            ...state,
            viewStack: [...state.viewStack, action.view],
         };
      case 'RESET_STATE':
         return initialState;
      default:
         return state;
   }
}

export default settingsReducer;
