import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { NotasFormModule } from 'src/app/shared/components/notas-form/notas-form.module';

@NgModule({
  declarations: [NewComponent],
  imports: [CommonModule, NewRoutingModule, NotasFormModule],
})
export class NewModule {}
