import React from 'react';
import './styles/Card.css'

class CharacterCard extends React.Component {
   render(){
    return(
        <React.Fragment>
        <div className="col-6 col-sm-2">
           <img name="img" className="card" src={this.props.character} alt=""/>
           <label className="texto" htmlFor="img">{this.props.name}</label>
         </div>
      
        
        </React.Fragment>
        
    )
   }
}

export default CharacterCard;

