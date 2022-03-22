import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceFormComponent } from './expense-form.component';

describe('ExpenceFormComponent', () => {
  let component: ExpenceFormComponent;
  let fixture: ComponentFixture<ExpenceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpenceFormComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
