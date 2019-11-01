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
    this.lat = -39.0687096;
    this.lng = -67.6409601;

    this.petType = ['Perro', 'Gato', 'Tortuga', 'Conejo', 'Cabra', 'Péz', 'Canguro', 'Jirafa'];
    this.distances = ['1 km', '2 km', '3 km', '4 km', '5 km', '6 km', '7 km', '8 km', '9 km'];
  }

  ngOnInit() {}
}
