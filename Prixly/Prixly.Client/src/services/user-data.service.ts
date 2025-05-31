import { Injectable } from '@angular/core';
import { AuthenticationService, AuthUser } from './authentication.service';
import { PrixlyDataService } from './prixly-data.service';
import { UserProfileDto } from '../models/user-profile-dto';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(public authenticationService: AuthenticationService, public prixlyDataService: PrixlyDataService) { }

  async getUserProfile() {
    var authenticatedUser: AuthUser = await this.authenticationService.getUserInformation();

    // Get the user data using the authentication service to retrieve the user ID
    var userProfile: UserProfileDto = this.prixlyDataService.getUserProfile(authenticatedUser.clientPrincipal?.userId);

    // If user data is not found, create a new user data object, fill out the necessary fields, and save it
    if (!userProfile) {
      // create a new user data object, with the user ID and other necessary fields
        userProfile = {
          authReferrence: authenticatedUser.clientPrincipal?.userId || '',
          authProvider: authenticatedUser.clientPrincipal?.identityProvider || '',
          email: authenticatedUser.clientPrincipal?.userDetails || '',
          name: authenticatedUser.clientPrincipal?.userDetails || '',
          createdAt: new Date(),
          lastLogin: new Date(),
          ownedCards: []
        };
    }
    else { 
        userProfile = {
          authReferrence: userProfile.authReferrence ||  authenticatedUser.clientPrincipal?.userId || '',
          authProvider: userProfile.authProvider || authenticatedUser.clientPrincipal?.identityProvider || '',
          email: userProfile.email || authenticatedUser.clientPrincipal?.userDetails || '',
          name: userProfile.name || authenticatedUser.clientPrincipal?.userDetails || '',
          lastLogin: new Date(),
          ownedCards: userProfile.ownedCards || []
        };
    }

      // Save the new user data object regardless of whether it was newly created or updated
    if (userProfile) {
      this.prixlyDataService.saveUserProfile(userProfile);
    }
    return userProfile;
  }
}
