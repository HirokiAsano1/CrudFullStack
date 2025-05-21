import { Component } from '@angular/core';
import { Carro } from '../../models/carro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss'
})
export class CarroslistComponent {

  lista: Carro[] = [];

  constructor()
  {
    let carro: Carro = new Carro();
    carro.id = 1;
    carro.nome = 'Fiesta';
    carro.marca = 'Ford';
    
    let carro2: Carro = new Carro();
    carro2.id = 2;
    carro2.nome = 'UNO';
    carro2.marca = 'Fiat';

    let carro3: Carro = new Carro();
    carro3.id = 3;
    carro3.nome = 'Monza';
    carro3.marca = 'Chevrolet';

    let carro4: Carro = new Carro();
    carro4.id = 4;
    carro4.nome = 'Corolla';
    carro4.marca = 'Toyota';

    this.lista.push(carro);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);
  }
}
