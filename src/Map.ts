import { User } from "./User";
import { Company } from "./Company";
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lng: 0, lat: 0 }
    });
  }
  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: user.location.lng,
        lat: user.location.lat
      }
    });
  }

  addCompanyMarker(company: Company): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: company.location.lng,
        lat: company.location.lat
      }
    });
  }
}
