import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurants.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[] = [];
  restaurantsAll: RestaurantModel[] = [];


  constructor(private restauranService: RestaurantsService) {
    this.loadRestaurants();
  }

  ngOnInit() {

  }

  loadRestaurants() {
    this.restauranService
      .getRestaurants()
      .subscribe((data: RestaurantModel[]) => {
        this.restaurants = data;
        this.restaurantsAll = data;
      });



  }
  search(evt) {
    const text: string = evt.srcElement.value;
    if (!text) {
      this.loadRestaurants();
    }
    this.restaurants = this.restaurantsAll.filter((r: RestaurantModel) => {
      if (r.nombre.toLowerCase().indexOf(text.toLowerCase()) !== -1) {
        return r;
      }
    });
  }

}
