import React, {Component} from 'react'
import Button from '@material-ui/core/Button'
import '../App.css';

export default class Cuenta extends Component{

    constructor(props){
        super(props)
        this.state = { saldo:10000,
                    limite:2500
                    }
        
    }

    restarMonto(n){
        this.cambiarMonto(this.state.saldo - n) 
    }

    cambiarMonto(n){
        this.setState({saldo:n})
    }

    tieneSaldo(n){
        return this.state.saldo>=n
    }

    cambiarLimite(){
        var nuevoLimite = prompt("¿Cuál es el nuevo límite que usted desea?")
        if(nuevoLimite<100){
            alert("ingrese un número mayor a 100")
            return
        }
        this.setState({limite:nuevoLimite})
    }

    transferir(){
        var nroCuenta = prompt("ingrese número cuenta")
        var nroCuentaValido= 1234
        if(nroCuenta!=nroCuentaValido){
            alert("ingrese número de cuenta válido")
            return
        }
        var saldoATransferir = prompt("ingrese saldo a transferir")
        if(saldoATransferir<=0 && this.tieneSaldo(saldoATransferir)){
            alert("ingrese un número mayor a cero")

        }
        else{
            this.restarMonto(saldoATransferir)
            alert("transferencia realizada correctamente")
        }
    }

    superaElSaldo(monto){
        //retorna un bool indicando si el saldo de la cuenta es mayor o igual al monto.
            return  this.state.saldo >= monto;
      }
    esNullOesEmpty(valor){
        return valor != null && valor !="undefined";
    }
    pagarServicio() {
        //servicios
        var agua = 350;
        var telefono = 425;
        var luz = 210;
        var servicio = prompt("Ingresa el numero que corresponda con el servicio que queres pagar : \n 1 - Agua \n 2 - Telefono \n 3 - Luz \n 4 - Internet" );
        if(this.esNullOesEmpty(servicio) ){
          switch (servicio) {
  
            case "1":
                if(this.superaElSaldo(agua)){
                        this.restarMonto(agua);
                      }
                else {
                        alert("No hay dinero suficiente para pagar este servicio");
                      }
            break;
            case "2":
                if(this.superaElSaldo(telefono)){
                        this.restarMonto(telefono);
                      }
               else{
                      alert("No hay dinero suficiente para pagar este servicio");
                    }
            break;
            case "3":
                if(this.superaElSaldo(luz)){
                        this.restarMonto(luz);
                      }
                else{
                        alert("No hay dinero suficiente para pagar este servicio");
                      }
            break;
            default:
                alert("No existe el servicio seleccionado");
  
            }
        }
    }

    render(){
        return (
          <div className="white-container">
            <div classNAme="menu-container">
                <h1 className="tu-cuenta">Tu cuenta</h1>
                <button class="links" onClick={(event) => { this.pagarServicio() }}>Pagar servicios</button>
                <button class="links" onClick={(event) => { this.transferir() }}>Hacer transferencia</button>
                <button class="links" onClick={(event) => { this.cambiarLimite() }}>Cambiar límite de extracción</button> 
            </div>
            <div class="green-container">
                <div class="cuenta-info">
                    <p>Saldo en tu cuenta</p>
                    <h3 id="saldo-cuenta">$ {this.state.saldo}</h3>
                    <p id="limite-extraccion">Tu límite de extracción es: {this.state.limite} </p>
                </div>
            </div>
        </div>
        )}
}
