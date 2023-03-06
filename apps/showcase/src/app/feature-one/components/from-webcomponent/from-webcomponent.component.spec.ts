import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromWebcomponentComponent } from './from-webcomponent.component';

describe('FromWebcomponentComponent', () => {
  let component: FromWebcomponentComponent;
  let fixture: ComponentFixture<FromWebcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromWebcomponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FromWebcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
