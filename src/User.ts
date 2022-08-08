// File to create & export a class, use capitalized first letter in file name

import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

// TS convention: NOT to use `default` keyword when exporting
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    // Can NOT assign lat/lng values directly like:
    // this.location.lat = xxx
    // because `location` object is not initialized yet
    // DO THE FOLLOWING instead
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
