import { Component, OnInit } from '@angular/core';

import { LandingPage } from '../landing-page';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  model = new LandingPage('', '', '', 'driving')

  onSubmit = () => {
    console.log('submitted')
  }

  constructor() { }

  ngOnInit() {
  }

}
