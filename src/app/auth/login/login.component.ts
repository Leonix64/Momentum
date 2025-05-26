import { Component, OnInit } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline, personOutline, logoGoogle, logoFacebook, logoApple, callOutline } from 'ionicons/icons';
import { Login, Register, UserAuth } from 'src/app/shared/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {

  isRegister = false;
  passwordType: string = 'password'; // Para mostrar/ocultar la contraseña
  authForm!: FormGroup;
  isLoading = false; // Manejo de estado de carga

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private tokenService: TokenService
  ) {
    addIcons({
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
      personOutline,
      logoGoogle,
      logoFacebook,
      logoApple,
      callOutline
    });

    this.initializeForm();
  }

  ngOnInit() { }

  initializeForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: [''],
      phoneNumber: [''],
    });

    this.authForm.get('name')?.setValidators(
      this.isRegister ? [Validators.required] : null
    );
    this.authForm.get('name')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.authForm.invalid) {
      this.markFormGroupTouched(this.authForm);
      return;
    }

    this.isLoading = true;

    if (this.isRegister) {
      this.register();
    } else {
      this.login();
    }
  }

  private login() {
    const loginData: Login = {
      email: this.authForm.value.email,
      password: this.authForm.value.password
    };

    this.authService.login(loginData).subscribe({
      next: (response) => {
        this.tokenService.setToken(response.token);
        //console.log('Token:', response.token);
        //console.log('Login Successful:', response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login Error:', error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private register() {
    const registerData: Register = {
      email: this.authForm.value.email,
      password: this.authForm.value.password,
      name: this.authForm.value.name,
      phoneNumber: this.authForm.value.phoneNumber
    };

    this.authService.register(registerData).subscribe({
      next: (response) => {
        //this.tokenService.setToken(response.token);
        //this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Register Error:', error);
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
    this.initializeForm();
  }

  togglePassword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}