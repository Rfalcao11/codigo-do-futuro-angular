import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteObserverServicoService } from 'src/app/servicos/ClienteObserverServico.service';
import { ClienteServico } from 'src/app/servicos/clienteServico';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private router:Router, 
    private routerParams: ActivatedRoute,
    private clienteObserverServicoService: ClienteObserverServicoService)
    {}

  
  
  public titulo:String = "Novo cliente"
 
  public cliente:Cliente = {} as Cliente

 

  ngOnInit(): void {
    let id:Number = this.routerParams.snapshot.params["id"]
    if(id){
      this.titulo = "Alterando cliente"
      this.cliente = ClienteServico.buscaClientePorId(id)
    }

  }

  salvar(){
    if(this.cliente.id>0){
      ClienteServico.alteraCliente(this.cliente)
    }else{
    
    ClienteServico.adicionaCliente({
      id: 1,
      nome: this.cliente.nome,
      telefone: 11999999999,
      endereco: this.cliente.endereco, 
      data: new Date(),
      valor: this.cliente.valor,
      cpf:33333333333
      
    });
    }
    this.clienteObserverServicoService.atualizaQuantidade();
    this.router.navigateByUrl("/contatos")

   // ClienteServico.adicionaCliente(novoCliente)



    }

}
