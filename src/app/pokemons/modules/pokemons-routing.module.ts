import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent }    from '../components/list/list-pokemon.component';

import { AuthGuard } from '../../services/auth-guard.service';
import { EditPokemonComponent } from '../components/edit/edit-pokemon.component';
import { DetailPokemonComponent } from '../components/detail/detail-pokemon.component';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
	{
		path: 'pokemon',
		canActivate: [AuthGuard],
		children : [{ path: 'all', component: ListPokemonComponent },
		{ path: 'edit/:id', component: EditPokemonComponent },
		{ path: ':id', component: DetailPokemonComponent }]
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class PokemonRoutingModule { }