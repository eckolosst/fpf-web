import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [LayoutComponent, FooterComponent, ToolbarComponent, LoginComponent, SignupComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, MatToolbarModule, MatButtonModule, MatDialogModule],
  exports: [LayoutComponent],
  entryComponents: [LoginComponent, SignupComponent]
})
export class SharedModule {}
