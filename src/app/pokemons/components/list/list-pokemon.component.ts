import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'mist-pokemon',
  templateUrl: './app/pokemons/components/list/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit {
  
  private pokemons: Pokemon[];
  private title: string = "Pokémons";

  constructor(private router: Router, private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons=pokemons);
   } 

   selectPokemon(pokemon : Pokemon) {
    console.log('Vous avez selectinné sur ' + pokemon.name);

    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
   }

}