import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicationsService } from 'src/app/shared/services/publications.service';
import { PetService } from 'src/app/shared/services/pet.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/shared/services/user.service';
import { LocationService } from 'src/app/shared/services/location.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader/app-loader.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.scss']
})
export class NewSearchComponent implements OnInit {
  public searchForm: FormGroup;
  public petForms: Array<FormGroup>;
  public petType;
  public imgUploaders: Array<FileUploader>;
  public urlApi: string;
  public locationMap: any;
  public locationMarker: any;
  public showMap: boolean;
  public newPublication;
  public userId;

  constructor(
    private formBuilder: FormBuilder,
    private publicationService: PublicationsService,
    private petService: PetService,
    private userService: UserService,
    private locationSercive: LocationService,
    private loader: AppLoaderService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.urlApi = environment.apiUrl;
    this.petType = ['Perro', 'Gato', 'Tortuga', 'Conejo', 'Cabra', 'Péz', 'Canguro', 'Jirafa'];
    this.petForms = [];
    this.imgUploaders = [];
    this.locationMarker = { lat: null, lng: null };
    this.locationMap = { lat: null, lng: null };
    this.userId = this.userService.getUserId();
    this.showMap = false;
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      userId: [null, Validators.required],
      location: [null, Validators.required],
      type: [null, Validators.required],
      date: [null, Validators.required]
    });
    this.addPet();
    this.getLocation();
  }

  addPet() {
    this.petForms.push(
      this.formBuilder.group({
        type: [null, Validators.required],
        name: [null],
        color: [null, Validators.required],
        raza: [null],
        description: [null]
      })
    );
    this.imgUploaders.push(
      new FileUploader({
        url: `${this.urlApi}/uploadPetImg`,
        method: 'POST',
        headers: [{ name: 'Authorization', value: 'Bearer ' + localStorage.getItem('token') }]
      })
    );
    this.imgUploaders[this.imgUploaders.length - 1].onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    this.imgUploaders[this.imgUploaders.length - 1].onCompleteItem = (_, response: any) => {
      const res = JSON.parse(response);
      // tslint:disable-next-line: prefer-const
      let data = this.petForms[res.index].value;
      data.publicationId = this.newPublication.id;
      data.image = res.filename;
      this.petService.addPet(data).subscribe(
        newPet => {
          // console.log(newPet);
          console.log(res.index === this.imgUploaders.length - 1);
          if (res.index === this.imgUploaders.length - 1) {
            this.loader.close();
            this.router.navigate(['/searches']);
          }
        },
        error => console.log(error)
      );
    };
  }

  send() {
    this.loader.open();
    this.locationSercive.addLocation(this.locationMarker).subscribe(
      newLocation => {
        const data = this.searchForm.value;
        data.location = newLocation.id;
        data.userId = this.userId;
        this.publicationService.addPublication(data).subscribe(
          newPublication => {
            this.newPublication = newPublication;
            this.imgUploaders.forEach((uploader, i) => {
              this.imgUploaders[i].onBuildItemForm = (_, form: any) => {
                form.append('index', i);
              };
              this.imgUploaders[i].uploadAll();
            });
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.locationMap.lat = position.coords.latitude;
          this.locationMap.lng = position.coords.longitude;
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

  placeMarker($event) {
    this.locationMarker.lat = $event.coords.lat;
    this.locationMarker.lng = $event.coords.lng;
  }

  showMessage() {
    this.snackBar.open('Seleccione la ubicación del evento en el mapa', 'OK', { duration: 10000 });
    this.showMap = true;
  }
}
