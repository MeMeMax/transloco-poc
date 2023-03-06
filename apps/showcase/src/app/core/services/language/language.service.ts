import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang = 'de-DE';

  constructor(private translocoService: TranslocoService) {}

  setLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
    this.lang = lang;
  }
}
