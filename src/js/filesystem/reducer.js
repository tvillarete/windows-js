import localForage from 'localforage';

const initialState = {
   tree: {
      'C': {
         Desktop: {
            'hi.txt': "This is some text! Edit me",
            'stuff': {
               'hello.txt': 'Hello there!',
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
   localForage.config({
      driver: localForage.WEBSQL,
      name: 'win10Fs',
      version: 1.0,
      size: 4980736,
      storeName: 'keyvaluepairs',
      description: 'hi'
   });

   switch(action.type) {
      case 'CREATE_FS':
         localForage.getItem('tree').then(thing => {
            console.log(thing);
         })
         localForage.setItem('tree', initialState.tree);
         return state;
      default:
         return state;
   }
}

export default fileReducer;
