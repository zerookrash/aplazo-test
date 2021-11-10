import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { ChoresService } from '../chores.service';

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
      // TODO: sweet alert
      alert('Nota eliminada');
    } catch (error) {
      console.log(error);
    }
  }
}
