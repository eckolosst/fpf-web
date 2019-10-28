import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchesComponent } from './searches/searches.component';
import { AdoptionsComponent } from './adoptions/adoptions.component';

@NgModule({
  declarations: [HomeComponent, SearchesComponent, AdoptionsComponent],
  imports: [CommonModule]
})
export class ViewsModule {}
