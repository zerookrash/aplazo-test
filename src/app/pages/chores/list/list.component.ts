import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  fakeData = [
    {
      name: 'Mario',
      lastname: 'Garcia',
      email: 'mario@correo.com',
      createDate: new Date(),
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime corporis, dolorum commodi dignissimos excepturi omnis, iusto quasi praesentium provident itaque natus asperiores quas eveniet voluptatibus, quod labore voluptates in?',
    },
    {
      name: 'Paola',
      lastname: 'Garcia',
      email: 'mario@correo.com',
      createDate: new Date(),
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime corporis, dolorum commodi dignissimos excepturi omnis, iusto quasi praesentium provident itaque natus asperiores quas eveniet voluptatibus, quod labore voluptates in?',
    },
    {
      name: 'Mariana',
      lastname: 'Garcia',
      email: 'mario@correo.com',
      createDate: new Date(),
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime corporis, dolorum commodi dignissimos excepturi omnis, iusto quasi praesentium provident itaque natus asperiores quas eveniet voluptatibus, quod labore voluptates in?',
    },
    {
      name: 'Mario',
      lastname: 'Garcia',
      email: 'mario@correo.com',
      createDate: new Date(),
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maxime corporis, dolorum commodi dignissimos excepturi omnis, iusto quasi praesentium provident itaque natus asperiores quas eveniet voluptatibus, quod labore voluptates in?',
    },
  ];

  constructor(private router: Router) {}

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
  onGoToDelete(item: any): void {
    alert('Borrado');
  }
}
