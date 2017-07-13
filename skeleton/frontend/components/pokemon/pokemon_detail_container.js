import React from 'react';
import PokemonDetail from './pokemon_detail';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  pokemon: state.pokemon.entities.find(state.pokemon.current_poke),
  items: state.pokemon.items
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(PokemonDetail);
