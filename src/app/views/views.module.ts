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
  MatDividerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NewSearchComponent } from './new-search/new-search.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [HomeComponent, SearchesComponent, AdoptionsComponent, NewSearchComponent],
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
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
})
export class ViewsModule {}
