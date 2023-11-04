import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { MenuComponent } from "./menu/menu/menu.component";
import { TemperaturaComponent } from "./Practicas/temperatura/temperatura.component";
import { MultiplicacionComponent } from "./Practicas/multiplicacion/multiplicacion.component";
import { CinepolisComponent } from "./Practicas/cinepolis/cinepolis.component";

const routes:   Routes=[
{path:'',redirectTo: '/menu', pathMatch:'full'},
//{path:'menu',component:MenuComponent},
{path:'Temperatura', component: TemperaturaComponent},
{path:'Multiplicacion', component: MultiplicacionComponent},
{path:'Cinepolis', component: CinepolisComponent}

]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}