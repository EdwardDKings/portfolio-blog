import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangingTextComponent } from './changing-text.component';

describe('ChangingTextComponent', () => {
  let component: ChangingTextComponent;
  let fixture: ComponentFixture<ChangingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
