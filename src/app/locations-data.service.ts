import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LocationsData } from './locations-data';
import { LandingPage } from './landing-page';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class LocationsDataService {

  constructor(
    private http: HttpClient,
   ) { }

  private fetchLocationsUrl = 'http://localhost:8081/api/itinerary/start';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    return new ErrorObservable(
      'Something bad happened; pelase try again later')
  }



  fetchLocations (landingPage): Observable<any> {
    return this.http.post<LocationsData>(this.fetchLocationsUrl, landingPage, httpOptions)

  }

}
