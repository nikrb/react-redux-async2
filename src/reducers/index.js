import {combineReducers} from 'redux';
import {items, itemsIsLoading, itemsHasErrored} from './items';

export default combineReducers({
  items,
  itemsIsLoading,
  itemsHasErrored
});
