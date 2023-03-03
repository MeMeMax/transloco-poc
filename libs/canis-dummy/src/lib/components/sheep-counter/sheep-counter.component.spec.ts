import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepCounterComponent } from './sheep-counter.component';

describe('SheepCounterComponent', () => {
  let component: SheepCounterComponent;
  let fixture: ComponentFixture<SheepCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SheepCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SheepCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
