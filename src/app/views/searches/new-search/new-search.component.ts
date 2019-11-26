import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicationsService } from 'src/app/shared/services/publications.service';
import { PetService } from 'src/app/shared/services/pet.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';

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

  constructor(
    private dialogRef: MatDialogRef<NewSearchComponent>,
    private formBuilder: FormBuilder,
    private publicationService: PublicationsService,
    private petService: PetService
  ) {
    this.urlApi = environment.apiUrl;
    this.petType = ['Perro', 'Gato', 'Tortuga', 'Conejo', 'Cabra', 'Péz', 'Canguro', 'Jirafa'];
    this.petForms = [];
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      userId: [null, Validators.required],
      location: [null, Validators.required],
      type: [null, Validators.required],
      date: [null, Validators.required]
    });
/*     this.imgUploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    }; */
    this.addPet();
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
        /* TODO: falta endpoint para guardar imagen */
        url: `${this.urlApi}/landing/uploadlandfile?id=bkg`,
        method: 'POST',
        headers: [{ name: 'Authorization', value: 'Bearer ' + localStorage.getItem('token') }]
      })
    );
  }

  send() {
    /* TODO: falta cargar la locations */
    this.publicationService.addMissingOrFound(this.searchForm.value).subscribe(
      newPublication => {
        let data;
        this.petForms.forEach(form => {
          /* TODO: cargar las imágenes de mascotas */
          data = form.value;
          data.userId = '';
          data.publicationId = newPublication.id;
          this.petService.addPet(data).subscribe(
            newPet => {
              console.log(newPet);
            },
            error => console.log(error)
          );
        });
      },
      error => console.log(error)
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
