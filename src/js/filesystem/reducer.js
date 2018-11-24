const initialState = {
   tree: {
      'C': {
         Desktop: {
            'hi.txt': 'txt',
            'stuff': {
               'hello.txt': 'txt',
            }
         },
         Downloads: {},
         Documents: {},
         Pictures: {},
         Music: {},
         Videos: {},
      }
   },

   defaultApps: {
      'txt': 'Notepad'
   }
}

const fileReducer = (state = initialState, action) => {
   switch(action.type) {
      default:
         return state;
   }
}

export default fileReducer;
