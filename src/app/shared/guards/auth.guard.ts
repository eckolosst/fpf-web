import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginComponent } from '../components/login/login.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public url: string;

  constructor(private dialog: MatDialog, private userService: UserService) {
    this.url = environment.apiUrl;
    // this.currentSession = this.loadSessionData();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isAuthenticated()) {
      return true;
    }
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      panelClass: 'custom-dialog-container'
    });
    return false;
  }

  isAuthenticated(): boolean {
    return this.userService.isLogued();
  }
}
