import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notas } from '../../models/notas.interface';
import { ChoresService } from '../../../pages/chores/chores.service';

import Swal from 'sweetalert2';
import moment from 'moment';

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.scss'],
})
export class NotasFormComponent implements OnInit {
  nota: Notas;
  notasForm!: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private notasSvc: ChoresService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.nota = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if (typeof this.nota === 'undefined') {
      this.router.navigate(['/new']);
    } else {
      this.notasForm.patchValue(this.nota);
    }
  }

  onSave(): void {
    if (this.notasForm.valid) {
      const nota = this.notasForm.value;
      const notaId = this.nota?.id || null;
      this.notasSvc.onSaveNote(nota, notaId);
      this.router.navigate(['/']);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu nota ha sido guardada',
        showConfirmButton: false,
        timer: 2000,
      });
      this.notasForm.reset();
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El formulario no es valido',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  isValidField(field: string) {
    const validateFild = this.notasForm.get(field);
    return validateFild?.valid && validateFild?.touched
      ? 'is-valid'
      : validateFild?.touched
      ? 'is-invalid'
      : '';
  }

  private initForm(): void {
    this.notasForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      createDate: [moment().format('Do MMMM YYYY, h:mm:ss a')],
      note: ['', [Validators.required]],
    });
  }

  onGoToList(): void {
    this.router.navigate(['/']);
  }
}
