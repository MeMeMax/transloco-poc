import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromLibraryComponent } from './from-library.component';

describe('FromLibraryComponent', () => {
  let component: FromLibraryComponent;
  let fixture: ComponentFixture<FromLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FromLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FromLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
