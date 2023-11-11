import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { MenuComponent } from "./menu/menu/menu.component";
import { TemperaturaComponent } from "./Practicas/temperatura/temperatura.component";
import { MultiplicacionComponent } from "./Practicas/multiplicacion/multiplicacion.component";
import { CinepolisComponent } from "./Practicas/cinepolis/cinepolis.component";
import { DatosPersoanlesComponent } from "./Practicas/datos-persoanles/datos-persoanles.component";
import {ExamenComponent} from "./Practicas/examen/examen.component";
import {ResultadosComponent} from "./Practicas/resultados/resultados.component"

const routes:   Routes=[
{path:'',redirectTo: '/menu', pathMatch:'full'},

{ path: 'DatosPersonales/:datos', component: DatosPersoanlesComponent },
//{ path: 'Resultado/:datos', component: ResultadosComponent },
{ path: 'Examen/:datos', component: ExamenComponent },


//{path:'menu',component:MenuComponent},
{path:'Temperatura', component: TemperaturaComponent},
{path:'Multiplicacion', component: MultiplicacionComponent},
{path:'Cinepolis', component: CinepolisComponent},
{path:'DatosPersonales', component: DatosPersoanlesComponent},
{path:'Examen', component: ExamenComponent},
{path:'Resultados', component: ResultadosComponent}

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}