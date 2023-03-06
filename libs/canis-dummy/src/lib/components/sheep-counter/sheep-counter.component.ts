import { Component } from '@angular/core';

@Component({
  selector: 'transloco-poc-sheep-counter',
  templateUrl: './sheep-counter.component.html',
  styleUrls: ['./sheep-counter.component.scss'],
})
export class SheepCounterComponent {
  counter = 0;
  lastCounted!: string;

  countSheeps() {
    this.counter += 1;
    this.lastCounted = new Date().toISOString();
  }
}
