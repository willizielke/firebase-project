import { Item } from './types';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getItems(): Item[] {
    const items: Item[] = [
      {
        name: 'Fireball',
        description:
          'Ein heißer Name für ein heißes Produkt! Fireball ist der ultimative Firebase-Experte, der Datenbanken entfacht und Projekte zum Glühen bringt.',
        url: 'assets/fireball.png',
      },
      {
        name: 'Cloudy McCloudface',
        description:
          'Treffen Sie Cloudy McCloudface, den wolkigsten Entwickler der Firebase-Welt! Mit seiner magischen Magenta-Wolke schwebt er über den Datenbanken und sorgt für einen unbeschwerten Entwicklungsprozess.',
        url: 'assets/cloud.png',
      },
      {
        name: 'Captain Firestore',
        description:
          'Captain Firestore ist der Hüter der Daten und der Kapitän der Firebase-Schifffahrt. Er segelt durch die Weiten der Datenbanken und garantiert eine reibungslose und sichere Speicherung.',
        url: 'assets/captain.png',
      },
    ];
    return items;
  }

  setItem(item: Item): boolean {
    console.log(item);
    return true;
  }
}
