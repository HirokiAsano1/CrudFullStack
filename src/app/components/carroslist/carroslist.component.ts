import { Component } from '@angular/core';
import { Carro } from '../../models/carro';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {
  lista: Carro[] = [];

  constructor() {
    let carro: Carro = new Carro();
    carro.id = 1;
    carro.nome = 'Fiesta';

    let carro2: Carro = new Carro();
    carro2.id = 2;
    carro2.nome = 'UNO';

    let carro3: Carro = new Carro();
    carro3.id = 3;
    carro3.nome = 'Monza';

    let carro4: Carro = new Carro();
    carro4.id = 4;
    carro4.nome = 'Corolla';

    this.lista.push(carro);
    this.lista.push(carro2);
    this.lista.push(carro3);
    this.lista.push(carro4);

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroNovo) {
      carroNovo.id = Date.now();
      this.lista.push(carroNovo);
    }

    if (carroEditado) {
      let indice = this.lista.findIndex((x) => {
        return x.id == carro.id;
      });
      this.lista[indice] = carroEditado;
    }
  }

  deletar(carro: Carro) {
    Swal.fire({
      title: 'Tem certeza que deseja deletar esta registro?!',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton : true,
      confirmButtonText: 'Sim',
      cancelButtonText:"Não"
    }).then((result) => {
      if (result.isConfirmed) {
        let indice = this.lista.findIndex((x) => {
          return x.id == carro.id;
        });
        this.lista.splice(indice, 1);

            Swal.fire({
            title: 'Deletado com Sucesso',
            icon: 'success',
            confirmButtonText: 'Ok',
          })
      }
    });
  }
}
