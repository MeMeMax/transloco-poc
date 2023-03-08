import { Component, Input } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'transloco-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [],
})
export class AppComponent {
  @Input() set language(language: string) {
    this.translocoService.setActiveLang(language);
  }

  constructor(private translocoService: TranslocoService) {}
}
