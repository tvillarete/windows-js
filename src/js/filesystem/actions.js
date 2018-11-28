import localForage from 'localforage';

export const init = () => {
   return dispatch => {
      // localForage.clear();
      if (!localForage.getItem('win10fs')) {
         localForage.createInstance({
            name: "win10fs"
         });
      }
      
      localForage.getItem('tree').then(tree => {
         dispatch({ type: 'CREATE_FS', tree });
      });
   }
}