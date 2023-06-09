import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriaProfissionalComponent } from './trajetoria-profissional.component';

describe('TrajetoriaProfissionalComponent', () => {
  let component: TrajetoriaProfissionalComponent;
  let fixture: ComponentFixture<TrajetoriaProfissionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetoriaProfissionalComponent]
    });
    fixture = TestBed.createComponent(TrajetoriaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
