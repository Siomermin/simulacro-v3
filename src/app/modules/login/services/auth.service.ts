import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afauth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const res = await this.afauth.signInWithEmailAndPassword(email, password);

      return res;
    } catch (error) {
      throw error;
    }
  }

  public isLoggedIn(): Promise<boolean> {
    return new Promise((resolve: any) => {
      this.afauth.onAuthStateChanged((user: any) => {
        user ? resolve(true) : resolve(false);
      });
    });
  }

  getLoggedUser() {
    return this.afauth.authState;
  }

  logout() {
    return this.afauth.signOut();
  }
}
