import { Observable, catchError, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { CacheStore } from '../interfaces/cache-store-interface';
import { Region } from '../interfaces/region.type';

@Injectable({providedIn: 'root'})
export class CountryService {

  private urlApi:string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: []},
    byCountries: {term: '', countries: []},
    byRegion: {region: '', countries: []}
  }



  constructor(private httpClient: HttpClient) { 
    this.CargarLocalStorage();
   }

  private GuardarLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
  }

  private CargarLocalStorage(){
    if (!localStorage.getItem('cacheStore')) return
    this.cacheStore = JSON.parse( localStorage.getItem('cacheStore')! )
  }

  private getCountriesRequest(url: string): Observable<Country[]>{
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(() => of([]))      
    )
    ;
  }

  
  searchCountryByAlphaCode(id: string): Observable<Country | null>{
    const url = `${this.urlApi}/alpha/${id}`;

    return this.httpClient.get<Country[]>( url )
    .pipe(
      map(countries => countries.length > 0? countries[0]: null),
      catchError(e => of(null))
    );
  }


  searchCapital(capital: string): Observable<Country[]>{
    const url = `${this.urlApi}/capital/${capital}`;    
    return this.getCountriesRequest(url)
            .pipe(
              tap(countries => this.cacheStore.byCapital = {term: capital, countries}),
              tap(() => this.GuardarLocalStorage())
            );
  }


  searchCountry(country:string): Observable<Country[]>{
    const url = `${this.urlApi}/name/${country}`;
    return this.getCountriesRequest(url)
            .pipe(
              tap(countries => this.cacheStore.byCountries= {term: country, countries}),
              tap(() => this.GuardarLocalStorage())
            );
  }
  

  searchRegion(region: Region): Observable<Country[]>{
    const url = `${this.urlApi}/region/${region}`
    return this.getCountriesRequest(url)
            .pipe(
              tap(countries => this.cacheStore.byRegion = {region, countries}),
              tap(() => this.GuardarLocalStorage())
            );
  }
  
}