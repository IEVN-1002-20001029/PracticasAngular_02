import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';





@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {

  datosCompartidos: any;
  Calificacion=0;
  p1=0;
  p2=0;
  p3=0;
  p4=0;
  p5=0;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dataSharingService: DataSharingService) {}


  


  Respuestas(){
    if(this.p1 !=0 && this.p2 !=0 && this.p3 !=0 &&  this.p4 !=0 &&   this.p5 !=0  ){
      if(this.p1==1){
        this.Calificacion = this.Calificacion +1 ;
      }
      if(this.p2==1){
        this.Calificacion = this.Calificacion +1;
      }
      if(this.p3==1){
        this.Calificacion = this.Calificacion +1;
      }
      if(this.p4==1){
        this.Calificacion = this.Calificacion +1;
      }
      if(this.p5==1){
        this.Calificacion = this.Calificacion +1;
      }

      const datosPrimerComponente = this.dataSharingService.getDatosPrimerComponente();
      this.dataSharingService.setDatosSegundoComponente({
          datosPrimerComponente,
          datosCali: this.Calificacion
        
      });

      this.router.navigate(['Resultados']);
      



    }else
    {
      alert ('falta contestar alguna pregunta')
    }

  }


}
