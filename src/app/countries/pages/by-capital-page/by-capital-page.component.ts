import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
      this.countries = this.countryService.cacheStore.byCapital.countries;
      this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string){
    this.isLoading = true
    //Si no se subscribe, no se regresa nada
    //Ejemplo: Si no se subscribe a canal de Youtube, no se reciben notificaciones del canal
    this.countryService.searchCapital( term )
        .subscribe( countriesSUBS => {
          this.countries = countriesSUBS
          this.isLoading = false;
        })
  }

  

}
