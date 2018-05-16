import { TestBed, inject } from '@angular/core/testing';

import { LocationsDataService } from './locations-data.service';

describe('LocationsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsDataService]
    });
  });

  it('should be created', inject([LocationsDataService], (service: LocationsDataService) => {
    expect(service).toBeTruthy();
  }));
});
