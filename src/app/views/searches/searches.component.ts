import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/shared/services/publications.service';
import { MatDialog } from '@angular/material';
import { PetDialogComponent } from './pet-dialog/pet-dialog.component';
import { PetService } from 'src/app/shared/services/pet.service';

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
  public publications;

  public petType;
  public distances;

  constructor(
    private publicationService: PublicationsService,
    private petService: PetService,
    private dialog: MatDialog
  ) {
    this.lat = 0;
    this.lng = 0;
    this.publications = [];

    this.petType = ['Perro', 'Gato', 'Tortuga', 'Conejo', 'Cabra', 'Péz', 'Canguro', 'Jirafa'];
    this.distances = ['1 km', '3 km', '5 km', '10 km', '15 km', '20 km', '25 km', '30 km'];
  }

  ngOnInit() {
    /* this.openPetDialog({
      type: 'Perro',
      name: 'Leonidas',
      color: 'Goldenrod',
      raza: null,
      description: 'luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
      publicationId: null,
      image: 'https://www.razasdeperros.com/wp-content/uploads/2013/07/labrador-retriever-adulto-250x180.jpg'
    }); */
    this.updateLocation();
    this.getMissingOrFound();
  }

  updateLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        },
        error => {
          console.error(error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  getMissingOrFound() {
    this.publicationService.getMissingOrFound().subscribe(
      result => {
        // console.log(result);
        this.publications = result;
      },
      error => console.log(error)
    );
  }

  openPetDialog(idPublicacion) {
    this.petService.getPetsByPublication(idPublicacion).subscribe(
      petData => {
        /* console.log(petData); */
        const dialogRef = this.dialog.open(PetDialogComponent, {
          width: '300px',
          panelClass: 'custom-dialog-container',
          data: petData[0]
        });
      },
      error => console.log(error)
    );
  }
}
