import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PokemonsService } from '../../services/pokemons.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'edit-pokemon',
  templateUrl: './app/pokemons/components/edit/edit-pokemon.component.html'
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
    .subscribe(pokemon => this.pokemon=pokemon);
  }

}