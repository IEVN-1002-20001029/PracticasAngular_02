import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  datosCombinados: any;


  constructor(private route: ActivatedRoute,
    private dataSharingService: DataSharingService) {

  }
  ngOnInit(): void {
    // Acceder a los datos combinados del servicio
    this.datosCombinados = this.dataSharingService.getDatosSegundoComponente();
  }

  
}