import * as faker from "faker";

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lng: number;
    lat: number;
  };
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude())
    };
  }
  markerContent(): string {
    return `
      <div>
        <h1>Company's name is ${this.companyName}</h1>
        <h2>${this.catchPhrase}</h2>
      </div>
    `;
  }
}
