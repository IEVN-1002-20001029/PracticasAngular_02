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

  if(this.cant/this.persona <7 ){
      if(this.op==2){

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
      else if (this.op==1){

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
  else if(this.cant/this.persona >=7 ) {
    this.persona=0;
    this.res=0;
    alert("Maximo 7 boletos por persona ")
    
  }


  }
}
