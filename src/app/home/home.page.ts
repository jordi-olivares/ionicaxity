import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, IonModal, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
//import { listenerCount } from 'process';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalFormPage } from '../modal-form/modal-form.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  
  constructor(private router:Router) {}
  
  redirect(route:string){
    this.router.navigate([route]);
  }

}
