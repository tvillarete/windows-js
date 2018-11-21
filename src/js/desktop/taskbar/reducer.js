const initialState = {
   icons: [
      'StartMenu',
      'Explorer',
   ]
}

const taskbarReducer = (state = initialState, action) => {
   switch(action.type) {
      default:
         return state;
   }
}

export default taskbarReducer;
