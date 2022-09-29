import { Component, ViewChild } from '@angular/core';
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
  radio:string='biff';
  constructor(private alertController: AlertController,private toastController: ToastController,private modalController: ModalController) {}
  async showAlert(){
    const options:AlertOptions={
      header:'Cerrar Session',
      subHeader:'important mensage',
      message:'This is an alert',
      buttons:[{
        text: 'si',
        handler:()=>{console.log('si')}
      },
      {
        text: 'no',
        role: 'cancel',
        handler:()=>{console.log('NO')}
      }
    ]
    }
    
    const alert=await this.alertController.create(options);
    alert.present();
  }

  async showToast(position:'top'|'middle'|'bottom'){
    const options:ToastOptions={
      position,
      message:'Se cerro la sesion correctamenete',
      duration:1500,
      buttons:[{
        text: 'OK',
        handler:()=>{console.log('Ok')}
      }
    ]
    }
    
    const toast=await this.toastController.create(options);
    toast.present();
  }

  async showModal(){
    const options:ModalOptions={
      component:ModalFormPage,
      cssClass:'name-modal'
    }
    //forma sincrona
    /*this.modalController.create(options).then(modalCtrl=>{
      modalCtrl.present();
      modalCtrl.onDidDismiss().then(ev=>{
        if (ev.role === 'confirm') {
          this.message = `Hello, ${ev.data}!`;
        }
      });
    })*/
    //forma asincrona
    const modal=await this.modalController.create(options);
    modal.present();
    modal.onDidDismiss().then(ev=>{
      if (ev.role === 'confirm') {
        this.message = `Hello, ${ev.data}!`;
      }
    });
  }

  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

}
