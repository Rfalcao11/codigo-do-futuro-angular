import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteObserverServicoService } from 'src/app/servicos/ClienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';

@Component({
  selector: 'app-clientes-notificacao',
  templateUrl: './clientes-notificacao.component.html',
  styleUrls: ['./clientes-notificacao.component.css']
})
export class ClientesNotificacaoComponent implements OnInit {
  
  
  constructor(
    
    public clienteObserverServicoService: ClienteObserverServicoService) 
  { 
    
    }
  

  ngOnInit(): void {
    
    
  }
  


}
