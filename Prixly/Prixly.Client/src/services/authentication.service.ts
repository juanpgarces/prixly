import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthUser {
  clientPrincipal?: {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
    claims: { [key: string]: any }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  /**
   * Retrieves user information from the Azure Static Web Apps authentication endpoint.
   */
  getUserInformation(): Observable<AuthUser> {
    return this.http.get<AuthUser>('/.auth/me');
  }

  /**
   * Initiates login with the specified provider.
   * @param provider The authentication provider ('github' or 'microsoft').
   */
  login(provider: 'github' | 'microsoft') {
    let loginUrl: string | null = null;

    switch (provider) {
      case 'github':
        loginUrl = '/.auth/login/github';
        break;
      case 'microsoft':
        loginUrl = '/.auth/login/aad';
        break;
      default:
        console.error(`Unknown provider: ${provider}`);
        return;
    }

    window.location.href = loginUrl;
  }

  /**
   * Logs out the current user.
   */
  logout() {
    window.location.href = '/.auth/logout';
  }
}
