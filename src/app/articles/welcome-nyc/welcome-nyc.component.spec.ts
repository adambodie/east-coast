import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNycComponent } from './welcome-nyc.component';

describe('WelcomeNycComponent', () => {
  let component: WelcomeNycComponent;
  let fixture: ComponentFixture<WelcomeNycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeNycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeNycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
