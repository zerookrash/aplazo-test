import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NotasFormComponent } from './notas-form.component';

@NgModule({
  declarations: [NotasFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NotasFormComponent],
})
export class NotasFormModule {}
