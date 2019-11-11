import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styleUrls: ['./searches.component.scss']
})
export class SearchesComponent implements OnInit {
  public lat: number;
  public lng: number;
  public aIcon = 'assets/images/avistamiento-icon.png';
  public pIcon = 'assets/images/perdido-icon.png';

  public petType;
  public distances;

  constructor() {
    /* Debería recuperar las coordenadas del dispositivo */
    this.lat = 0;
    this.lng = 0;

    this.petType = ['Perro', 'Gato', 'Tortuga', 'Conejo', 'Cabra', 'Péz', 'Canguro', 'Jirafa'];
    this.distances = ['1 km', '3 km', '5 km', '10 km', '15 km', '20 km', '25 km', '30 km'];
  }

  ngOnInit() {
    this.updateLocation();
  }

  updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        },
        error => console.error(error)
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
