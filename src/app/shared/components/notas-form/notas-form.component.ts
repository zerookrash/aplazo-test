import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Notas } from '../../models/notas.interface';

@Component({
  selector: 'app-notas-form',
  templateUrl: './notas-form.component.html',
  styleUrls: ['./notas-form.component.scss'],
})
export class NotasFormComponent implements OnInit {
  nota: Notas;
  notasForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
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
    console.log('Guardado', this.notasForm.value);
  }

  private initForm(): void {
    this.notasForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      createDate: [new Date()],
      note: ['', [Validators.required]],
    });
  }

  onGoToList(): void {
    this.router.navigate(['list']);
  }
}
