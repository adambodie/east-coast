import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelawareComponent } from './delaware.component';

describe('DelawareComponent', () => {
  let component: DelawareComponent;
  let fixture: ComponentFixture<DelawareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelawareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelawareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
