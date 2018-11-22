const initialState = {
   icons: [
      'StartMenu',
      'Settings',
   ],

   config: {
      accent: 'dodgerblue',
   }
}

const taskbarReducer = (state = initialState, action) => {
   switch(action.type) {
      default:
         return state;
   }
}

export default taskbarReducer;
