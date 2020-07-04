import { RestaurantsModule } from './../restaurants/restaurants.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantModel } from '../restaurants/restaurants.model';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  item: RestaurantsModule;

  constructor(private activatedRoute: ActivatedRoute, private callNumber: CallNumber) {
    this.activatedRoute.params.subscribe((params: RestaurantModel) => {
      this.item = params;
    });
  }

  ngOnInit() { }


callPhone(phone)
{
  this.callNumber.callNumber("18001010101", true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
}


}
