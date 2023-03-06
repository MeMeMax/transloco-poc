import { Component } from '@angular/core';

import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'transloco-poc-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  constructor(public languageService: LanguageService) {}
}
