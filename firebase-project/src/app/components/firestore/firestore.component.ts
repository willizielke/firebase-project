import { Item } from './../../types';
import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.scss'],
})
export class FirestoreComponent {
  item: Item = { name: '', description: '', url: '' };

  addedName!: string;
  addedDescription!: string;
  addedUrl!: string;

  added = false;

  constructor(private service: AppService) {}

  async addItem() {
    if (
      this.item.name === '' ||
      this.item.description === '' ||
      this.item.url === ''
    ) {
      alert('Bitte Alle Felder ausfüllen!');
      return;
    }

    this.added = await this.service.setItem(this.item);

    if (!this.added) {
      return;
    }

    this.addedName = this.item.name;
    this.addedDescription = this.item.description;
    this.addedUrl = this.item.url;
    this.item.name = '';
    this.item.description = '';
    this.item.url = '';
  }
}
