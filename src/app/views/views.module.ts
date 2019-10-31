import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchesComponent } from './searches/searches.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent, SearchesComponent, AdoptionsComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule]
})
export class ViewsModule {}
