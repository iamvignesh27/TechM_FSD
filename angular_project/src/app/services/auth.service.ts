import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {
    this.clearSessionOnStart();
  }

  private clearSessionOnStart(): void {
    localStorage.removeItem('auth_token'); // Clear session on page refresh
    this.isAuthenticatedSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  login(username: string, password: string): boolean {
    // Simulate authentication
    if (username === 'Vignesh' && password === 'Vicky@123') {
      localStorage.setItem('auth_token', 'dummy_token');
      this.isAuthenticatedSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject.next(false);
  }
}