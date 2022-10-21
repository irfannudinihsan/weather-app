import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/';
  key = '504befc8373fc6ccca2f9b1261916990';
  city = 'Bantul';

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get(`${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`);

  }

  getDataForcast() {
    return this.http.get(`${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`);
  }
}



