import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FirestorageComponent } from './components/firestorage/firestorage.component';
import { FirestoreComponent } from './components/firestore/firestore.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' }, //on start opens http://localhost:4200/start instead of http://localhost:4200
  { path: 'start', component: MainComponent, pathMatch: 'full' },
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'firestorage', component: FirestorageComponent },
  { path: 'firestore', component: FirestoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
