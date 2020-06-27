import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private httpClient: HttpClient) { }

  getRestaurants(){

    const url="https://cedesistemas-app-api.azurewebsites.net/api/Restaurantes";
    return this.httpClient.get(url);

     
      }
      
  }



