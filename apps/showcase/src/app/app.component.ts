import { Component } from '@angular/core';

import { LanguageService } from './core/services/language/language.service';

@Component({
  selector: 'transloco-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public languageService: LanguageService) {}

  langChange(event: Event) {
    this.languageService.setLanguage((event.target as HTMLSelectElement).value);
  }
}
