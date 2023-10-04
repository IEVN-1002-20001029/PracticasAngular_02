import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})
export class MultiplicacionComponent {

  num1=0;
  num2=0;
  resultado=0;
  numeros=0;

  generarNumeroConcatenado(): string {
    return ('+'+this.num2 ).repeat(this.num1 - 1 );
  }
  
  calcular(){
    for (var i=0; i < this.num1; i++) {
      this.resultado+=this.num2;
    }
  
  }
}
