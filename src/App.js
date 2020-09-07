import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom'

import CharacterCard from './components/CharacterCard.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
 
  state = {
    loading: true,
    error: null,
    data: {
      info: {},
      results: []
    },
    nextPage: 1
  };
  

 
  componentDidMount(){
    this.fetchCharacters()
  }

  fetchCharacters = async ()=>{
  this.setState(
    {
        loading: true, error: null 
    }
  )
  
    try {
      
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
      );
      const data = await response.json();  
      this.setState({ loading: false, error: null, data: data });   
     
    } catch (error) {
     
      this.setState({ loading: false, error: error });
    }

    
  }

  handlePage = (number)=>{
    console.log(number);
    this.setState({
      nextPage : number
    })
    this.fetchCharacters()
    this.render()
  }



  render(){
    if (this.state.error) {
      return "Error!";
    }

    return (
      <div className="App">

        <header className="App-header">
          <div className="Header-content">
            <img className="App-logo" src="http://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-File.png" alt=""/>
          </div>
          <div className="container-fluid mt-5">
          <div className="row">
            { this.state.data.results.map((character)=>{
              return (
                <CharacterCard key={character.id} character={character.image} name={character.name} />
                )
            }) }
          </div>
      
          <div className="row justify-content-center">
            <div className="col-4" align="center">
              {this.state.loading && (
                <div class="loader"></div>

              )}
            </div>
          </div>
 

          <div className="row justify-content-center">
            <div className="col-4" align="center">
              <BrowserRouter  >
                <Link to="/" onClick={() => this.handlePage(1)}> 1 </Link>
                <Link to="/" onClick={() => this.handlePage(2)} > 2 </Link>
                <Link to="/" onClick={() => this.handlePage(3)}> 3 </Link>
              </BrowserRouter>
            </div>
          </div>




        </div>
        </header>
      </div>
    );
  }
 
}

export default App;
