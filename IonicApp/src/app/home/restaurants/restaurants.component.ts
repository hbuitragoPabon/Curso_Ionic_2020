import { RestaurantsService } from './restaurants.service';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from './restaurants.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantModel[]=[];


  constructor(private restauranService:RestaurantsService) {
    this.loadRestaurants();
 }

 ngOnInit() {

 }

 loadRestaurants(){
  this.restauranService.getRestaurants()
  .subscribe((data: RestaurantModel[])=>{
    this.restaurants=data;

  });
  
 }

}
