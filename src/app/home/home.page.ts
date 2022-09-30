import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, AlertOptions, IonMenu, IonModal, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
//import { listenerCount } from 'process';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalFormPage } from '../modal-form/modal-form.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonMenu) menu: IonMenu;
  menuList=[
    {name:'Messages',route:'tabs/messages'},
    {name:'form',route:'tabs/form'},
    {name:'list',route:'tabs/list'}
  ];
  constructor(private router:Router) {}
  
  redirect(route:string){
    this.menu.close();
    this.router.navigate([route]);
  }

}
