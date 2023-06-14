import { AppService } from './../../app.service';
import { Component } from '@angular/core';
import { Item } from 'src/app/types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  constructor(private service: AppService) {}

  myItems: Item[] = [];

  ngOnInit(): void {
    this.service.getItems().subscribe((items) => {
      this.myItems = items;
    });
  }
}
