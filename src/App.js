import React, { Component } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { CountriesList } from './components/CountriesList';
import ListCountries from './countries.json';
import Routes from './Routes'
// import {CountryDetails} from "./components/CountryDetails"
class App extends Component {

  state = {
    listC: ListCountries,
  }



  render() {
    const {listC} = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="row-app">
          <CountriesList data={listC}/>
          <Routes/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
