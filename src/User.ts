import * as faker from "faker";

export class User {
  name: string;
  location: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `User's name is ${this.name}`;
  }
}
