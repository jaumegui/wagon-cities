import React from 'react';
import CityList from '../containers/city_list';

const App = () => {
  return (
    <div className="app">
      <CityList cities={cities} />
    </div>
  );
};

export default App;