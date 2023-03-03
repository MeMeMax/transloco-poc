import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'transloco-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lang = 'de';

  constructor(private translocoService: TranslocoService) {}

  langChange() {
    this.translocoService.setActiveLang(this.lang);
  }
}
