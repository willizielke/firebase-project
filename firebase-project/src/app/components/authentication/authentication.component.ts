import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  loggedIn = false;

  constructor() {}

  signInClicked(): void {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signOutClicked(): void {
    //this.auth.signOut();
  }
}
