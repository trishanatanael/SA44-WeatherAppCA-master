import { Component, OnInit, ViewChild, Output, Input, EventEmitter, ElementRef, Renderer } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Http, HttpModule } from '@angular/http';



@Component({

  selector: 'app-add-city',

  templateUrl: './add-city.component.html',

  styleUrls: ['./add-city.component.css']

})

export class AddCityComponent implements OnInit {

  private static APPID = 'dfbada2f4d037580e0038dcf38780281';

  @ViewChild('weatherForm') weatherForm: NgForm;

  weatherOfCities = [];

  cityList = [];

  city: string;


  // injection

  constructor(private http: Http) {

  }



  ngOnInit() {
  }


  addCityList(cityname: string) {

    console.log('city: %s', cityname);

    if (!this.cityList.includes(cityname)) {

      this.cityList.push(cityname);
    }

    this.weatherForm.reset();

  }



  getWeather(cityname: string) {

    const cityName = cityname;

    console.log('city weather: %s', cityname);


    this.http.get('http://api.openweathermap.org/data/2.5/weather', {

      params: {

        q: cityName,

        appid: AddCityComponent.APPID

      }

    }).subscribe(result => {

      this.weatherOfCities = result.json().weather;
      this.city = result.json().name;

      console.log('weather = ', this.weatherOfCities);
      console.log('cityjs = ', this.city);

    },

      error => {

      });

  }
}


