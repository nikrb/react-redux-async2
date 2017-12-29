import React from 'react';
import { connect} from 'react-redux';
import { itemsFetchData} from '../../actions/items';

class ItemList extends React.Component {
  componentDidMount = () => {
    this.props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  };
  render = () => {
    const {hasErrored, isLoading, items} = this.props;
    if( hasErrored){
      return <p>Sorry the data fetch failed</p>
    }
    if( isLoading){
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {items.map( item => <li key={item.id}>{item.label}</li> )}
      </ul>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch( itemsFetchData(url))
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(ItemList);
