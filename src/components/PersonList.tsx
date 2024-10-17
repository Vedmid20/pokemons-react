import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Додайте імпорт Link
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../PersonList.css'

export default class PersonList extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(res => {
        const pokemons = res.data.results;
        const pokemonPromises = pokemons.map(pokemon => axios.get(pokemon.url));

        Promise.all(pokemonPromises).then(responses => {
          const pokemonsWithSprites = responses.map(response => response.data);
          this.setState({ pokemons: pokemonsWithSprites });
        });
      });
  }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Photo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.pokemons.map(pokemon => (
              <TableRow key={pokemon.id}>
                <TableCell>
                <Link to={`/pokemon/${pokemon.id}`}>
                  <h1>{pokemon.name}</h1> 
                  </Link>
                </TableCell>
                <TableCell>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100px' }} className='image'/>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
