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

  getAllAirports(): Observable<IAirport[]> {
    return this.http.get(`${environment.apiRoot}/airports.json`)
      .pipe(
        map(retObj => {
          return Object.values(retObj)
        }));
  }

  getAirportById(id: number): Observable<IAirport> {
    return this.http.get(`${environment.apiRoot}/airports.json?orderBy="/AirportId"&equalTo=${id}`)
      .pipe(
        map(retObj => {
          return Object.values(retObj)[0];
        }));
  }

  createAirport(airport: IAirport): Observable<string> {
    return this.http.post(`${environment.apiRoot}/airports.json`, airport)
    .pipe(
      map(retObj => {
        return Object.values(retObj)[0]["name"];
      }));
  }

  updateAirport(key: string, airport: IAirport): Observable<IAirport>{
    return this.http.patch(`${environment.apiRoot}/airports/${key}.json`, airport)
    .pipe(
      map(retObj => {
        return Object.values(retObj)[0];
      }));;
  }

  deleteAirport(key: string): Observable<any> {
    return this.http.delete(`${environment.apiRoot}/airports/${key}.json`);
  }
}
