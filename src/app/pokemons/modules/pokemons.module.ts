
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListPokemonComponent } from '../components/list/list-pokemon.component';

import { BorderCardDirective } from '../directives/border-card.directive';
import { PokemonTypeColorPipe } from '../pipes/pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from '../services/pokemons.service';
import { DetailPokemonComponent } from '../components/detail/detail-pokemon.component';
import { EditPokemonComponent } from '../components/edit/edit-pokemon.component';
import { PokemonFormComponent } from '../components/pokemon-form.component';
import { PokemonSearchComponent } from '../components/search/search-pokemon.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { AuthGuard } from '../../services/auth-guard.service';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		PokemonRoutingModule
	],
	declarations: [
		LoaderComponent,
		ListPokemonComponent,
		DetailPokemonComponent,
		EditPokemonComponent,
		PokemonFormComponent,
		PokemonSearchComponent,
		BorderCardDirective,
		PokemonTypeColorPipe
	],
	providers: [ PokemonsService, AuthGuard ]
})
export class PokemonsModule { }