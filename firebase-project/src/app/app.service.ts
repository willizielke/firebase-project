import { Item } from './types';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private firestore: AngularFirestore) {}

  getItems(): Observable<Item[]> {
    return this.firestore.collection<Item>('items').valueChanges();
  }

  async setItem(item: Item): Promise<boolean> {
    await this.firestore.collection('items').doc().set(item);
    return Promise.resolve(true);
  }
}
