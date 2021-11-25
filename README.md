# Palo IT

Esta es una app sencilla donde se muestra un CRUD para crear / editar / eliminar / visualizar Notas
1. El titulo se pasa a Mayusculas en cuanto se crea la nota, no acepta correo electronico como titulo solo acepta letras y numeros.
2. La fecha es presentada con la libreria moment.js y con un formato de Do 'MMMM YYYY'
3. La apliccion trabaja con Firebase con el cual se hace el almacenamiento de las notas y el requerimiento de las mismas para mostrarlas en un listado en la pagian principal
4. En la pantalla de detalles se hace una peticion utilizando el id de la nota para mostrar los detalles de la nota, asi como dos botones para editar la nota y para eliminar la nota ambas operaciones se hacen mediante una peticion con el id de la nota en cuenstion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
