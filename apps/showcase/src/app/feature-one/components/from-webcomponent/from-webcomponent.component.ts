import { Component } from '@angular/core';

import { LanguageService } from '../../../core/services/language/language.service';

@Component({
  selector: 'transloco-poc-from-webcomponent',
  templateUrl: './from-webcomponent.component.html',
  styleUrls: ['./from-webcomponent.component.scss'],
})
export class FromWebcomponentComponent {
  constructor(public languageService: LanguageService) {}
}
