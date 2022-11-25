import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClienteObserverServicoService } from 'src/app/servicos/ClienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';
import { Cliente } from '../../models/cliente';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(
    private router:Router,
    private clienteObserverServicoService: ClienteObserverServicoService
    ) { }

  ngOnInit(): void {
  }
  public clientes:Cliente[] = ClienteServico.buscaClientes()

  novo(){
    this.router.navigateByUrl("/form")
  }
  excluir(cliente:Cliente){
    ClienteServico.excluirCliente(cliente)
    this.clientes = ClienteServico.buscaClientes()
    this.clienteObserverServicoService.atualizaQuantidade()
    


  }

}
