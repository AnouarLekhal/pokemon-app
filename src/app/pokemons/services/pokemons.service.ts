import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient){}

    private pokemonsUrl = `api/pokemons`;
    
   private log(log: string) {
     console.log(log);
   }

   private handelError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
     };
   }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonsUrl)
      .pipe(tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handelError(`getPokemons`, [])));
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
      if(!term.trim()) {
        return of([]);
      }
      
      const url = `${this.pokemonsUrl}/?name=${term}`; 

      return this.http.get<Pokemon[]>(url)
      .pipe(tap(_ => this.log(`found pokemons matching "${term}"`)),
      catchError(this.handelError<Pokemon[]>(`searchPokemons`, [])));
    }
    
    deletePokemon(pokemon: Pokemon): Observable<Pokemon>  {

      const url = `${this.pokemonsUrl}/${pokemon.id}`; 

      const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
      };
      
      return this.http.delete(url, httpOptions)
      .pipe(tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handelError<any>(`deletePokemon`)));
    }


    updatePokemon(pokemon: Pokemon): Observable<Pokemon>  {
      const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'})
      };
      
      return this.http.put(this.pokemonsUrl, pokemon, httpOptions)
      .pipe(tap(_ => this.log(`update pokemon id=${pokemon.id}`)),
      catchError(this.handelError<any>(`updatePokemon`)));
    }


    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon>  {
      const url = `${this.pokemonsUrl}/${id}`;
      
      return this.http.get<Pokemon>(url)
      .pipe(tap(_ => this.log(`fetched pokemon id=${id}`)),
      catchError(this.handelError<Pokemon>(`getPokemon id=${id}`)));

      /*let pokemons = this.getPokemons();
    
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }*/
    }

    getPokemonTypes(): string[] {
      return ['Plante', 'Feu', 'Eau',
       'Insecte', 'Normal', 'Electrik',
       'Poison', 'Fée', 'Vol'];
    }
}