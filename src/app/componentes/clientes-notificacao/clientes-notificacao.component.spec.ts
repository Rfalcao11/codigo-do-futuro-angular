import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesNotificacaoComponent } from './clientes-notificacao.component';

describe('ClientesNotificacaoComponent', () => {
  let component: ClientesNotificacaoComponent;
  let fixture: ComponentFixture<ClientesNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesNotificacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
