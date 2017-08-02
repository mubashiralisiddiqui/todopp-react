import React, { Component } from 'react';
import axios from 'axios';
// import MDSpinner from 'react-md-spinner';

import CamperList from './camperList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    };
  }

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
        this.setState({
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });
      }));
  }

  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  changeView(currentView) {
    this.setState({ currentView });
  }

  render() {
   const style={
     heading:{
     backgroundColor:"black",
     color :"white",
     textAlign:"center",
     width:"100%",
     height:"80px",
     paddingTop:"20px"},
     button:{
       width:"200px",
       marginLeft:"20px",
      //  backgroundColor:"white",
       color:"black",
      
     }

   }

    return (
      
      <div>
        {console.log("current campers",this.state.currentView)}
        <div style={style.heading}>
        <h2>{`Viewing Top ${this.state.currentView}`}</h2>
        </div>
        <button onClick={() => this.changeView('recentCampers')} className="btn btn-primary"style={style.button}>Recent campers</button>
         <button onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary" style={style.button}>All Time Campers</button> 
        <CamperList campers={this.state[this.state.currentView]} />
      </div>
    );
  }
}