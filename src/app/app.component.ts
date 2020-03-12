import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {
  
  title = 'Lista de Compras';

  niveis = [];

  /* Adiciono Nivel */
  addNivel() {
    this.niveis.push({
      niv: 1,
      sub: 0,
      des: 'Primeiro Nivel'
    });
  }

  /* Deleto Nivel */
  delNivel(id) {

    console.log(id);

    // unset($niveis[]);

  }

  ediNivel() {



  }


}
