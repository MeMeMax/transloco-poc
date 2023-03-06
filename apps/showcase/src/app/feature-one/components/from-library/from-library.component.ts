import { Component } from '@angular/core';

import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'transloco-poc-from-library',
  templateUrl: './from-library.component.html',
  styleUrls: ['./from-library.component.scss'],
})
export class FromLibraryComponent {
  constructor(public languageService: LanguageService) {}
}
