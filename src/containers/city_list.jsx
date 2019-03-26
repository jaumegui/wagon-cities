import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  render() {
    return (
    <div className="cities">
      { this.props.cities.map((city) => <City city={city} key={city.slug}/>)}
    </div>
  )};
};

export default CityList;