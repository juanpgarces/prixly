import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { PrixlyDataService } from './prixly-data.service';
import { UserProfileDto } from '../models/user-profile-dto';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(public authenticationService: AuthenticationService, public prixlyDataService: PrixlyDataService) { }

  getUserData() {
    var authenticatedUser = this.authenticationService.getUserInformation();

    // Get the user data using the authentication service to retrieve the user ID
    var userProfile: UserProfileDto = this.prixlyDataService.getUserProfile(authenticatedUser.userId);

    // If user data is not found, create a new user data object, fill out the necessary fields, and save it
    if (!userData) {
      // create a new user data object, with the user ID and other necessary fields
      userData = {
        userId: authenticatedUser.userId,
        email: authenticatedUser.email || '',
        name: authenticatedUser.name || '',
        createdAt: new Date(),
        // Add other default fields as needed
      };

      // Save the new user data object
      this.prixlyDataService.saveUserProfile(userData);
    }

    return userData;
  }
}
