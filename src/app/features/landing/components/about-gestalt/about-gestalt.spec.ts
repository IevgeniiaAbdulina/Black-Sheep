import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutGestalt} from './about-gestalt';

describe('AboutGestalt', () => {
  let component: AboutGestalt;
  let fixture: ComponentFixture<AboutGestalt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutGestalt],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutGestalt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
