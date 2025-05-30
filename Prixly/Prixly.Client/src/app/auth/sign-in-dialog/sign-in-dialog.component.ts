import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../services/authentication.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in-dialog',
  standalone: true,
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule]
})
export class SignInDialogComponent {
  constructor(public dialogRef: MatDialogRef<SignInDialogComponent>, public authenticationService: AuthenticationService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // Register custom icons if needed
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/GitHub_Invertocat_Dark.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'microsoft',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/Microsoft_logo.svg')
    );
  }

  loginWith(provider: 'github' | 'microsoft') {
    // Placeholder: call your auth service here

    this.authenticationService.login(provider);

    console.log(`Logging in with ${provider}`);
    this.dialogRef.close();
  }
}
