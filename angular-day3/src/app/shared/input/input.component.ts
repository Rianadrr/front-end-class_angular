import { Component} from '@angular/core';
import { Creditur } from '../interface/creditur';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-input',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  @Output() addLeasingEvent = new EventEmitter<Creditur>();

  leasingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.leasingForm = this.fb.group({
      name: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(21)]],
      occupation: ['', Validators.required],
      dp: [null, [Validators.required]],
      amount: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
  }

  submitData() {
    if (this.leasingForm.valid) {
      this.addLeasingEvent.emit(this.leasingForm.value);
      this.leasingForm.reset(); // reset form agar placeholder muncul lagi
    } else {
      this.leasingForm.markAllAsTouched();
    }
  }
  formatNumber(controlName: string, event: any) {
    let input = event.target.value.replace(/\./g, ''); // hapus semua titik
    if (!isNaN(input) && input !== '') {
      // update FormControl dengan angka asli (tanpa titik)
      this.leasingForm.get(controlName)?.setValue(Number(input), { emitEvent: false });

      // format tampilan dengan titik ribuan
      event.target.value = Number(input).toLocaleString('id-ID');
    } else {
      this.leasingForm.get(controlName)?.setValue(0, { emitEvent: false });
      event.target.value = '';
    }
  }

}
