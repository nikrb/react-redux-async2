
export function itemsHasErrored( bool) {
  return {
    type: "ITEM_HAS_ERRORED",
    hasErrored: bool
  };
}
export function itemsIsLoading( bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool
  };
}
export function itemsFetchDataSuccess( items) {
  return {
    type: "ITEMS_FETCH_DATA_SUCCESS",
    items
  };
}

// turn actions into action creators for redux thunk
// error after 5 seconds, simple example
// export function errorAfterFiveSeconds() {
//     // We return a function instead of an action object
//     return (dispatch) => {
//         setTimeout(() => {
//             // This function is able to dispatch other action creators
//             dispatch(itemsHasErrored(true));
//         }, 5000);
//     };
// }

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch( itemsIsLoading( true));
    // fetchData innards from ItemList, dispatch instead of setState
    fetch( url)
    .then( response => {
      if( !response.ok){
        throw Error( response.statusText);
      }
      // this.setState( { isLoading: false});
      dispatch( itemsIsLoading( false));
      return response
    })
    .then( response => response.json())
    // .then( items => this.setState( { items}))
    .then( items => dispatch( itemsFetchDataSuccess( items)))
    // .catch( () => this.setState({ hasErrored: true}));
    .catch( () => dispatch( itemsHasErrored( true)));
  };
}
