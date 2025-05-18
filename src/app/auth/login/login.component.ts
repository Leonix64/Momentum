import { Component, OnInit } from '@angular/core';
import { IonicModule, IonIcon } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { mailOutline, lockClosedOutline, eyeOutline, eyeOffOutline, personOutline, logoGoogle, logoFacebook, logoApple } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginComponent implements OnInit {
  isRegister = false;
  passwordType: string = 'password'; // Para mostrar/ocultar la contraseña

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline,
      personOutline,
      logoGoogle,
      logoFacebook,
      logoApple
    });
  }

  ngOnInit() { }

  toggleAuthMode() {
    this.isRegister = !this.isRegister;
  }

  togglePasword() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }
}
