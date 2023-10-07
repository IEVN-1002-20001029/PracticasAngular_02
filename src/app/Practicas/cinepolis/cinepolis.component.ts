import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {


cant=0;
res=0;
boleto=12;
op=0;
persona=0;

calcular(){

  if(this.cant< 1 || this.persona<1)
  {
    alert("No puedes introducir esa cantidad de boletos")
    this.persona=0;
    this.res=0;
    this.cant=0;
  }

  if(this.cant/this.persona <=7 ){
      if(this.op==2 || this.op==0){

        if(this.cant > 5  ){
          this.res=(this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 15)
        }
        else if (this.cant >= 3 && this.cant <=5){
          this.res=(this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 10)
        }
        else if (this.cant <=2){
          this.res=(this.cant*this.boleto)
        }
      }
      else if (this.op==1 ){

        if(this.cant > 5  ){
          this.res=( (this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 15) ) - (((this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 15)) /(100)*10 )
          }
        else if (this.cant >= 3 && this.cant <=5){
          this.res=((this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 10) ) - (((this.cant*this.boleto)- ((this.cant*this.boleto)/(100) * 10)) /(100)*10 )
          }
        else if (this.cant <=2){
          this.res=(this.cant*this.boleto) - ((this.cant*this.boleto) /(100) * 10) 
          }
        }

  }
  else if(this.cant/this.persona >7 ) {
    this.persona=0;
    this.res=0;
    this.cant=0;
    alert("Alerta verifica el numero de compradores o boletos y selecciona la tarjeta")
    
  }


  }
}
