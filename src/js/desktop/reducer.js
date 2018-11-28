const initialState = {
   background: 'images/bg.jpg'
}

const desktopReducer = (state = initialState, action) => {
   switch(action.type) {
      case 'CHANGE_BACKGROUND':
         return {
            ...state,
            background: action.background
         }
      default:
         return state;
   }
}

export default desktopReducer;
