import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  tx="";
  tx2="";
  tx3='';
  tem='';
  tip='';
  resultado:number=0;

  calcular(){
    if (this.tip == '1'){
      this.resultado=( (parseFloat(this.tem) * 9/5) +32)
      this.tx="°grados Celsius es igual a "
      this.tx2="°grados fahrenheit";
      this.tx3=this.tem;
    }
     else if (this.tip == '2'){
      this.resultado=( (parseFloat(this.tem)  -32 )  * 5/9 )
      this.tx="°grados fahrenheit  es igual a"
      this.tx2="°grados Celsius";
      this.tx3=this.tem;
    } 
  }

}
