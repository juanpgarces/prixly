import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { SignInDialogComponent } from '../auth/sign-in-dialog/sign-in-dialog.component';
import { AuthenticationService, AuthUser } from '../../services/authentication.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user$: Observable<AuthUser>;

  constructor(
    public dialog: MatDialog,
    public authenticationService: AuthenticationService) {
    this.user$ = this.authenticationService.getUserInformation();
  }

  openSignIn() {
    this.dialog.open(SignInDialogComponent, {
      width: '300px'
    });
  }
}
