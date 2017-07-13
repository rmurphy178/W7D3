import React from 'react';

class PokemonDetail extends React.Component {
  componentWillReceiveProps(newProps){
    if(this.props.pokemon.id !== newProps.match.params.pokemonId){
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }
  }
  render(){
    return (
      <div>

      </div>
    );
  }
}

export default PokemonDetail;
