import { Component, ViewChild } from '@angular/core';

import { Http, Response} from '@angular/http';

import { NgModel} from '@angular/forms';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  constructor(private http: Http) {}

  apiKey: string = '2765e1be7926a66d3d64132e2164612f';

  cityName: string = 'London';

  searchCity() {

    this.http.get('api.openweathermap.org/data/2.5/weather',

      {params:  {appid: this.apiKey, q: this.cityName}})

      .subscribe(

        (res: Response) => {

          const weatherCity = res.json();

          console.log(weatherCity);

        });

  }

}