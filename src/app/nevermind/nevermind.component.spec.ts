import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NevermindComponent } from './nevermind.component';

describe('NevermindComponent', () => {
  let component: NevermindComponent;
  let fixture: ComponentFixture<NevermindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NevermindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NevermindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
