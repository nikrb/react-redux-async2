import React from 'react';

export default class ItemList extends React.Component {
  state = {
    isLoading: false,
    hasErrored: false,
    items: []
  };
  componentDidMount = () => {
    this.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  };
  fetchData = url => {
    this.setState( { isLoading: true});
    fetch( url)
    .then( response => {
      if( !response.ok){
        throw Error( response.statusText);
      }
      this.setState( { isLoading: false});
      return response
    })
    .then( response => response.json())
    .then( items => this.setState( { items}))
    .catch( () => this.setState({ hasErrored: true}))
  };
  render = () => {
    if( this.state.hasErrored){
      return <p>Sorry the data fetch failed</p>
    }
    if( this.state.isLoading){
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {this.state.items.map( item => <li key={item.id}>{item.label}</li> )}
      </ul>
    );
  };
};
