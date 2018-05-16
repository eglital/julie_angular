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
    console.log('submitted', this.model)
    this.fetchLocations(this.model)
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
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.model.startingLocation = [position.coords.latitude, position.coords.longitude]
      })
    }
  }

}
