import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SearchesComponent } from './views/searches/searches.component';
import { AdoptionsComponent } from './views/adoptions/adoptions.component';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'home', component: HomeComponent, pathMatch:'full'},
      {path: 'searches', component: SearchesComponent},
      {path: 'adoptions', component: AdoptionsComponent},
      /*{path: 'mifoto', component: MifotoComponent, canActivate: [AuthGuard]},
      {path: 'foto/:nombre', component: FotoComponent},
      {path: 'publicar-foto/:id', component: PublicarFotoComponent, canActivate: [AuthGuard]}, */
    ]
  },
  {
    path: 'error',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
