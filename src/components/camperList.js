import React from 'react';

import CamperListItem from './camperListitem';

const CamperList = ({ campers }) => {

  const Items = campers.map((camper, index) => {
    return <CamperListItem key={index} camper={camper} number={index + 1} />
  });
  const style={
    backgroundColor:"gray",
    textAlign:'center',
    width:'100%',
    height:70,
  
    
  }

  return (
    <div>
      <div style={style}>
        <h3>Leader Board</h3>
      </div>
    <table className="table table-striped">
      
      <thead>
        
        <tr>
          
            
          
          <th>s.no</th>
          <th>Username</th>
          <th>Last 30 Days</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {Items}
      </tbody>
    </table>
    </div>
  );
}

export default CamperList;