interface Mappable {
  location: {
    lng: number;
    lat: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lng: 0, lat: 0 }
    });
  }
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: mappable.location.lng,
        lat: mappable.location.lat
      }
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hello world"
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
