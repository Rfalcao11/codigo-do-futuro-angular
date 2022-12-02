import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cliente } from "../models/cliente"
import { firstValueFrom } from 'rxjs';

export class ClienteServico{

   constructor(private http:HttpClient){}

   public async lista(): Promise<Cliente[] | undefined>{
    let clientes:Cliente[] |undefined = await firstValueFrom(this.http.get<Cliente[]>(`${environment.api}/clientes`))
    return clientes;

   }







  static buscaClientePorId(id: Number): Cliente {
    let cliente:Cliente = {} as Cliente
    for(let i=0; i<ClienteServico.clientes.length; i++){
        let clienteDb = ClienteServico.clientes[i];
        if(clienteDb.id == id){
            cliente = clienteDb
            break
            }
            
        }
        return cliente;
  }
  private static clientes: Cliente[]= [{
       id:1,
       nome: 'Jurema',
       telefone:11999999999,
       endereco: "RUA teste",
       data: new Date(),
       valor: 0,
       cpf: 33333333333


  }]

  public static buscaClientes():Cliente[]{
    return ClienteServico.clientes;
  }
  public static adicionaCliente(cliente:Cliente):void{
      cliente.id = ClienteServico.buscaClientes().length +1
      ClienteServico.clientes.push(cliente);
    
  }
  public static alteraCliente(cliente:Cliente):void{
    for(let i=0; i<ClienteServico.clientes.length; i++){
        let clienteDb = ClienteServico.clientes[i];
        if(clienteDb.id == cliente.id){
            clienteDb = {
                ... cliente
            }
            break
        }
    }
    
    
  }
  public static excluirCliente(cliente:Cliente):void{
    let listaNova = []
    for(let i=0; i<ClienteServico.clientes.length; i++){
        let clienteDb = ClienteServico.clientes[i];
        if(clienteDb.id != cliente.id){
            listaNova.push(clienteDb)
            }
            
        }
        ClienteServico.clientes = listaNova
    }
    
}