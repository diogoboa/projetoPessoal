import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajetoriaAcademicaComponent } from './trajetoria-academica.component';

describe('TrajetoriaAcademicaComponent', () => {
  let component: TrajetoriaAcademicaComponent;
  let fixture: ComponentFixture<TrajetoriaAcademicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrajetoriaAcademicaComponent]
    });
    fixture = TestBed.createComponent(TrajetoriaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
