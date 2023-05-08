import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesEContatoComponent } from './informacoes-e-contato.component';

describe('InformacoesEContatoComponent', () => {
  let component: InformacoesEContatoComponent;
  let fixture: ComponentFixture<InformacoesEContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacoesEContatoComponent]
    });
    fixture = TestBed.createComponent(InformacoesEContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
