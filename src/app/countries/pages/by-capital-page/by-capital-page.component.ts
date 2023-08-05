import { Country } from '../../interfaces/country';
import { CountryService } from './../../services/countries-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private countryService: CountryService){}

  searchByCapital(term: string){
    //Si no se subscribe, no se regresa nada
    //Ejemplo: Si no se subscribe a canal de Youtube, no se reciben notificaciones del canal
    this.countryService.searchCapital( term )
        .subscribe( countriesSUBS => {
          this.countries = countriesSUBS
        })
  }

}
