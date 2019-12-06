import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchesComponent } from './searches/searches.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatSnackBarModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NewSearchComponent } from './new-search/new-search.component';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { PetDialogComponent } from './searches/pet-dialog/pet-dialog.component';

@NgModule({
  declarations: [HomeComponent, SearchesComponent, AdoptionsComponent, NewSearchComponent, PetDialogComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    FileUploadModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5tJUUev07_4R3XvpL9x5s201tVGvCCrU'
      // apiKey: ''
    })
  ],
  entryComponents: [PetDialogComponent]
})
export class ViewsModule {}
