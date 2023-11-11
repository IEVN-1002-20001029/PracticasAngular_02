import { Component, Input,  } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService  } from 'src/app/data-sharing.service';



@Component({
  selector: 'app-datos-persoanles',
  templateUrl: './datos-persoanles.component.html',
  styleUrls: ['./datos-persoanles.component.css']
})
export class DatosPersoanlesComponent {


rb=0;
nombre:string='';
Apaterno='';
Amaterno='';
day=0;
month=0;
year=0;
signo='';
edad=0;
public pagn='';

constructor(private router: Router,
            private dataSharingService: DataSharingService) {}


validarFechaNacimiento(): boolean {
          const fecha = new Date(this.year, this.month - 1, this.day);
          const esFechaValida =
            !isNaN(fecha.getTime()) &&
            fecha.getFullYear() === this.year &&
            fecha.getMonth() === this.month - 1 &&
            fecha.getDate() === this.day;

          // Mostrar mensaje en la consola
          if (esFechaValida) {
            console.log('Fecha de nacimiento válida');

            this.calcularEdadYSigno();
               
              // Guardar datos en el servicio para compartirlos
              



              this.dataSharingService.setDatosPrimerComponente({
                datosNombre: this.nombre,
                datosApaterno: this.Apaterno,
                datosAmaterno: this.Amaterno,
                datosEdad: this.edad,
                datosSigno: this.signo
              });

              // Navegar a la siguiente página
              this.router.navigate(['Examen']);



          } else {
            alert('Fecha de nacimiento no válida');
          }

          return esFechaValida;
       }


       calcularEdadYSigno(): void {
        const hoy = new Date();
        const fechaNacimiento = new Date(this.year, this.month - 1, this.day);
    
        // Calcular la edad
        this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const mesActual = hoy.getMonth() + 1;
        if (mesActual < this.month || (mesActual === this.month && hoy.getDate() < this.day)) {
          this.edad--;
        }
    
      // Determinar el signo zodiacal chino
          const signosZodiacalesChinos:any = {
            'https://elcomercio.pe/resizer/2-GQ1EtYPGzHdjWnA6po-kU5K2g=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VUKSU3CECFA6RILNQZYIO35ZHY.jpg': [1924, 1936, 1948, 1960, 1972, 1984, 1996, 2008, 2020],
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2023%2F01%2F20%2FHoroscopo-chino-165942187-2000.jpg&q=60': [1925, 1937, 1949, 1961, 1973, 1985, 1997, 2009, 2021],
            'Tigrhttps://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Tigre.jpge': [1926, 1938, 1950, 1962, 1974, 1986, 1998, 2010, 2022],
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2023%2F01%2F20%2FHoroscopo-chino-165927323-2000.jpg&q=60': [1927, 1939, 1951, 1963, 1975, 1987, 1999, 2011, 2023],
            'https://static.onecms.io/wp-content/uploads/sites/21/2023/01/20/Horoscopo-chino-165942305-2000.jpg': [1928, 1940, 1952, 1964, 1976, 1988, 2000, 2012, 2024],
            'https://static.onecms.io/wp-content/uploads/sites/21/2023/01/20/Horoscopo-chino-165965553-2000.jpg': [1929, 1941, 1953, 1965, 1977, 1989, 2001, 2013, 2025],
            'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Caballo.jpg': [1930, 1942, 1954, 1966, 1978, 1990, 2002, 2014, 2026],
            'https://s.yimg.com/ny/api/res/1.2/zptCan_55Wrqxqj3fvIfYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MQ--/https://media.zenfs.com/es/people_en_espa_ol_155/f24e72768f01be41583d6e7605b89e96': [1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027],
            'https://static.onecms.io/wp-content/uploads/sites/21/2023/01/20/Horoscopo-chino-165967347-2000.jpg': [1932, 1944, 1956, 1968, 1980, 1992, 2004, 2016, 2028],
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2023%2F01%2F20%2FHoroscopo-chino-165926089-2000.jpg&q=60': [1933, 1945, 1957, 1969, 1981, 1993, 2005, 2017, 2029],
            'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg': [1934, 1946, 1958, 1970, 1982, 1994, 2006, 2018, 2030],
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F21%2F2023%2F01%2F20%2FHoroscopo-chino-165969332-2000.jpg&q=60': [1935, 1947, 1959, 1971, 1983, 1995, 2007, 2019, 2031]
          };

          for (const signo in signosZodiacalesChinos) {
            if (signosZodiacalesChinos[signo].includes(this.year)) {
              this.signo = signo;
              break;
            }
          }

          console.log('Edad:', this.edad);
          console.log('Signo zodiacal chino:', this.signo);
      }




limpiar(){
  this.rb=0;
  this.nombre='';
  this.Amaterno='';
  this.Apaterno='';
  this.day=0;
  this.month=0;
  this.year=0;

}



siguiente(){
  if(this.nombre != '' && this.Apaterno != '' && this.Amaterno !='' && this.rb !=0 && this.day !=0 && this.month != 0 && this.year != 0){

    this.validarFechaNacimiento();

  }
  else{
    alert('Falta alguno de lo datos')
  }
  }
}






