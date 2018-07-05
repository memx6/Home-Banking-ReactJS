//Declaración de variables

var nombreUsuario = "Federico Matias Sanchez";
var saldoCuenta = 5000;
var limiteExtraccion = 2500;
var codigoSeguridad = 8888;

//servicios
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;

//cuentas amigas

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;



//Funcion para agregar dinero

function sumarDinero(_dinero){
                     saldoCuenta += _dinero;
                    }

//Funcion para restar dinero

function restarDinero(_dinero){
                    saldoCuenta-= _dinero;
                    }

//Funciones implementadas para facilitar el ejercicio.

function sePuedeEntregarMonto(monto){
  //retorna un bool indicando si se puede extraer en billetes de 100.
     return monto%100 === 0;
}

function superaLimiteExtraccion(monto){
  //retorna un bool indicando si el monto es menor o igual al limite de extraccion.
      return  monto <= limiteExtraccion;
}

function superaElSaldo(monto){
  //retorna un bool indicando si el saldo de la cuenta es mayor o igual al monto.
      return  saldoCuenta >= monto;
}

function verificarCuenta(_cuenta){
  //verifica si alguna cuenta amiga es igual a la pasada por parametro.
    return _cuenta == cuentaAmiga1 || _cuenta == cuentaAmiga2;

}

function verificarCodigoDeSeguridad(_codigo){
  //verifica si el codigo de seguridad es igual al pasado por parametro.
    return codigoSeguridad == _codigo;
}

function esNullOesEmpty(valor){
    return valor != null && valor !="undefined";
}

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
iniciarSesion(); // cuando se ejecuta esta linea , me pide el codigo 2 veces ,no pude solucionarlo.
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = prompt("¿Cual es el nuevo limite de extraccion?");
    if(esNullOesEmpty(nuevoLimite)){
        limiteExtraccion = parseInt(nuevoLimite);
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extracion es de : $" + limiteExtraccion);
  }
}

function extraerDinero() {
    var extraccion = prompt("¿Cuanto dinero quiere extraer?");
    var saldoAnterior = saldoCuenta;

    if(superaElSaldo(extraccion) && esNullOesEmpty(extraccion)){

          if(superaLimiteExtraccion(extraccion)){

            if(sePuedeEntregarMonto(extraccion)){
                restarDinero(parseInt(extraccion));
                actualizarSaldoEnPantalla();
                alert("Su extraccion es de : $" + extraccion + "\n Su saldo actual es de : $" + saldoCuenta);

              }
            else{
                alert("Solo puede extraer billetes de 100");
              }

            }
          else {
              alert("La cantidad de dinero que quieres extraer es mayor a la de tu limite de extraccion");
            }

     }
    else {
         alert("Monto Insuficiente");
      }


}

function depositarDinero() {
     var dineroADepositar = prompt("¿Cuanto dinero quiere depositar?");
     var saldoAnterior = saldoCuenta;
     if( esNullOesEmpty(dineroADepositar)){
     sumarDinero(parseInt(dineroADepositar));
     actualizarSaldoEnPantalla();
     alert("Su deposito es de : $" + dineroADepositar + " \n" + "Su saldo anterior es: $" + saldoAnterior + "\n" + "Su saldo actual es de :$" + saldoCuenta);
    }
}

function pagarServicio() {
      var servicio = prompt("Ingresa el numero que corresponda con el servicio que queres pagar : \n 1 - Agua \n 2 - Telefono \n 3 - Luz \n 4 - Internet" );
      if(esNullOesEmpty(servicio) ){
        switch (servicio) {

          case "1":
              if(superaElSaldo(agua)){
                      saldoCuenta -= agua;
                      actualizarSaldoEnPantalla();
                    }
              else {
                      alert("No hay dinero suficiente para pagar este servicio");
                    }
          break;
          case "2":
              if(superaElSaldo(telefono)){
                      saldoCuenta -= telefono;
                      actualizarSaldoEnPantalla();
                    }
             else{
                    alert("No hay dinero suficiente para pagar este servicio");
                  }
          break;
          case "3":
              if(superaElSaldo(luz)){
                      saldoCuenta -= luz;
                      actualizarSaldoEnPantalla();
                    }
              else{
                      alert("No hay dinero suficiente para pagar este servicio");
                    }
          break;
          case "4":
              if(superaElSaldo(internet)){
                      saldoCuenta -= internet;
                      actualizarSaldoEnPantalla();
                    }
              else {
                      alert("No hay dinero suficiente para pagar este servicio");
          break;              }
          default:
              alert("No existe el servicio seleccionado");

  }
 }
}

function transferirDinero() {
    var dineroATrasnferir = prompt("¿Cuanto dinero quiere trasnferir");
    if( superaElSaldo(parseInt(dineroATrasnferir)) &&  esNullOesEmpty(dineroATrasnferir)){

        var numeroCuenta= prompt("Ingrese el numero de cuenta");
        if( verificarCuenta(parseInt(numeroCuenta)) && esNullOesEmpty(numeroCuenta) ){
           saldoCuenta -= parseInt(dineroATrasnferir);
           actualizarSaldoEnPantalla();
           alert("Trasferencia realizada \n Usted trasfirio : $" + dineroATrasnferir + "\n Cuenta destino : " + numeroCuenta );
         }
        else{
              alert("Solo se puede trasferir dinero a cuentas amigas");
            }
     }
    else {
        alert("Dinero insuficinte");
         }
    }

function iniciarSesion() {
      var codigo = prompt("Ingrese su codigo de seguridad");
      if( verificarCodigoDeSeguridad(codigo)){
      alert("Bienvenido " + nombreUsuario + ", gracias por utilizar Home Banking");

       }

      else{
       saldoCuenta = 0;
       alert("Usuario incorrecto , su dinero ha sido retenido por seguridad");
          }
      }

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
