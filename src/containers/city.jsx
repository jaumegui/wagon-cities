import React, { Component } from 'react';

const City = ({ city }) => {
  return(
    <div className="list-group-item">
      {city.name}
    </div>
  );
};

export default City;