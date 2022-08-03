import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing4Component } from './landing4.component';

describe('Landing4Component', () => {
  let component: Landing4Component;
  let fixture: ComponentFixture<Landing4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Landing4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landing4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
