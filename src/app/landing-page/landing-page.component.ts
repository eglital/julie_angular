import { Component, OnInit } from '@angular/core';

import { LandingPage } from '../landing-page';
import { LocationsData } from '../locations-data';
import { LocationsDataService } from '../locations-data.service'

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  model = new LandingPage('', '', '', 'driving', ['sights'])
  locationsData: LocationsData;
  error: string;

  onSubmit = () => {
     if (navigator.geolocation) {
       console.log('navigator')
      let p = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(position => {
        resolve([position.coords.latitude, position.coords.longitude]);
      }, reject)
    });
      p.then(coordinates => {
        this.model.startingLocation = coordinates;
        console.log('submitted', this.model)
        this.fetchLocations(this.model);
      })
    }
  }

  fetchLocations(landingPage: LandingPage): void {
    this.locationsDataService.fetchLocations(landingPage)
      .subscribe(locationsData => {
        this.locationsData = locationsData;
        console.log(this.locationsData)
      },
        error => this.error = error)

  }

  constructor(
    private locationsDataService: LocationsDataService
  ) { }

  ngOnInit() {
  }

}
