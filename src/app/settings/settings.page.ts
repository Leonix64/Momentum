import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton,
  IonIcon, IonAvatar, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { colorPaletteOutline, helpCircleOutline, informationCircleOutline, lockClosedOutline, notificationsOutline, personOutline, shieldCheckmarkOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonButton, IonIcon, IonAvatar, RouterLink]
})
export class SettingsPage implements OnInit {

  user = {
    name: 'John Doe',
    email: 'usuario@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3'
  };

  constructor() {
    addIcons({
      personOutline, lockClosedOutline, notificationsOutline,
      colorPaletteOutline, shieldCheckmarkOutline, helpCircleOutline,
      informationCircleOutline
    });
  }

  ngOnInit() {
  }

}
