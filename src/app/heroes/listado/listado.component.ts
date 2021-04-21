import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan america'];
  heroeBorrado: string = '';
  
  borrarHeroe(): void{
    console.log('Borrando...');
    // this.heroes.splice(0,1);
    // const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
  }

  // expresion(): boolean{
  //   if(this.heroeBorrado == '')
  //     return false;
  //   else 
  //     return true;
  // }

}
