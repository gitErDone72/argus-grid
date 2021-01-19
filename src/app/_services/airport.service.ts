import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAirport } from '../_models/airport.interface';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private http: HttpClient) { }

  getAllAirports():Observable<IAirport[]> {
    return this.http.get(environment.apiRoot + '/airports.json')
      .pipe(
        map(retObj => {
          return Object.values(retObj)
        }));
  }
}
