import { Observable, catchError, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountryService {

  private urlApi:string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) { }


  
  searchCountryByAlphaCode(id: string): Observable<Country | null>{
    const url = `${this.urlApi}/alpha/${id}`;

    return this.httpClient.get<Country[]>( url )
    .pipe(
      map(countries => countries.length > 0? countries[0]: null),
      catchError(e => of(null))
    );
  }


  searchCapital(term: string): Observable<Country[]>{
    const url = `${this.urlApi}/capital/${term}`;
    
    return this.httpClient.get<Country[]>( url )
            .pipe(
              catchError(e => of([]))
            );
  }


  searchCountry(term:string): Observable<Country[]>{
    const url = `${this.urlApi}/name/${term}`;

    return this.httpClient.get<Country[]>(url)
            .pipe(
              catchError(e => of([]))
            )
  }
  

  searchRegion(region: string): Observable<Country[]>{
    const url = `${this.urlApi}/region/${region}`

    return this.httpClient.get<Country[]>(url)
            .pipe(
              catchError(e => of([]))
            )
  }
  
}