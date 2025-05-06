import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
  }
  get isPasswordMatch(): boolean {
    return (
      this.form.get('password')?.value ===
      this.form.get('confirmpassword')?.value
    );
  }
  onSubmit() {
    if (this.form.valid && this.isPasswordMatch) {
      console.log('ثبت نام موفق', this.form.value);
    } else {
      console.log('فرم نامعتبر یا رمزها هماهنگ نیستند');
    }
  }
}
