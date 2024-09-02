import React, { Component } from "react";

import Banniere from '../../components/public/Banniere';
import SearchForm from '../../components/public/SearchBar/SearchForm';


export class Home extends Component {
  render() {
    return (
        <div className="text-center">
          <Banniere/>
          <div className="mt-4">
          <h1>Tattoo artist</h1>
          </div>
          <SearchForm/>
          <ul>
            <li>Annuaire de tatoueurs</li>
            <li>Trouve ton artiste par ville</li>
            <li>Trouve ton artiste par departements</li>
            <li>Trouve un tatouage</li>
            <li>Charche un tatoueur par style</li>
            <li>Découvre des salons de tatouage</li>
            <li>Suis les actualités des tatoueurs</li>
          </ul>


        </div>
    );
  }
}
export default Home;
