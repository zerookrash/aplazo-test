import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ChoresService } from '../chores.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  notas$ = this.notasSvc.notas;

  constructor(private router: Router, private notasSvc: ChoresService) {}

  navigationExtras: NavigationExtras = {
    state: {
      value: 'test',
    },
  };

  ngOnInit(): void {}

  onGoToEdit(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  onGoToDetails(item: any): void {
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }
  async onGoToDelete(nId: any): Promise<void> {
    try {
      await this.notasSvc.onDeleteNote(nId);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu nota ha sido eliminada',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
