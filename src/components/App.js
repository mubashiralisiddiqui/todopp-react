import React from 'react';
// import axios from 'axios';


;
import AddReceipie from './AddRecipie.js';


class RecipieBox extends React.Component{
  
  render(){
    const style={
      heading:{
        textAlign:"center",
      },
      // RecipieBox:{
      //   paddingLeft:"480px",
      //   backgroundColor:"gray"
      // }
  }
    return(
      <div>
        <h1 style={style.heading}>RecipieBox</h1>
        <div style={style.RecipieBox}>
      <AddReceipie/>
      </div>
      </div>
    )
  }
}
export default RecipieBox;