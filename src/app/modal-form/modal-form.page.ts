import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.page.html',
  styleUrls: ['./modal-form.page.scss'],
})
export class ModalFormPage implements OnInit {
  name:string;
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }
  cancel(){
    this.modalController.dismiss(null,'cancel');
  }
  confirm(){
    this.modalController.dismiss(this.name,'confirm');
  }

}
