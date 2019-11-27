import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatDialogModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicationsService } from './services/publications.service';
import { HttpClientModule } from '@angular/common/http';
import { AppLoaderService } from './services/app-loader/app-loader.service';
import { AppLoaderComponent } from './services/app-loader/app-loader.component';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    ToolbarComponent,
    LoginComponent,
    SignupComponent,
    AppLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [LayoutComponent, AppLoaderComponent],
  entryComponents: [LoginComponent, SignupComponent, AppLoaderComponent],
  providers: [PublicationsService, AppLoaderService]
})
export class SharedModule {}
