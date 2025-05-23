import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Carro } from '../../models/carro';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carros-details',
  imports: [MdbFormsModule, FormsModule, CommonModule],
  templateUrl: './carros-details.component.html',
  styleUrl: './carros-details.component.scss',
})
export class CarrosDetailsComponent {
  carro: Carro = new Carro(0, '');
  router = inject(ActivatedRoute);
  router2 = inject(Router);
  constructor() {
    let id = this.router.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    let carroRetornado: Carro = new Carro(id, 'Fiesta');
    this.carro = carroRetornado;
  }
  save() {
    if (this.carro.id > 0) {
      Swal.fire({
        title: 'Sucesso!',
        text: 'Editado COM SUCESSO',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.router2.navigate(['admin/carros'], {
        state: { carroEditado: this.carro },
      });
    } else {
      Swal.fire({
        title: 'Sucesso!',
        text: 'ADICIONADO COM SUCESSO',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      this.router2.navigate(['admin/carros'], {
        state: { carroNovo: this.carro },
      });
    }
  }
  isEditMode = false;
  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.isEditMode = !!id;
  }
}
