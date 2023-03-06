import { Component } from '@angular/core';

import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'transloco-poc-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  constructor(public languageService: LanguageService) {}
}
