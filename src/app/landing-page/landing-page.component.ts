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
  model = new LandingPage('', '', '', 'driving', ['sigths'])
  locationsData: LocationsData;
  error: string;

  onSubmit = () => {
    console.log('submitted', this.model)
    this.fetchLocations(this.model)
  }

  fetchLocations(landingPage: LandingPage): void {
    this.locationsDataService.fetchLocations(landingPage)
      .subscribe(locationsData => this.locationsData = locationsData,
        error => this.error = error)
  }

  constructor(
    private locationsDataService: LocationsDataService
  ) { }

  ngOnInit() {
  }

}
