import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetAlert2Component } from './sweet-alert2.component';

describe('SweetAlert2Component', () => {
  let component: SweetAlert2Component;
  let fixture: ComponentFixture<SweetAlert2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetAlert2Component]
    });
    fixture = TestBed.createComponent(SweetAlert2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
