import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-primero-dam',
  templateUrl: './primero-dam.page.html',
  styleUrls: ['./primero-dam.page.scss'],
})
export class PrimeroDAMPage implements OnInit {

  

  constructor(    private toastController: ToastController) { 

  }


  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Checkbox cliqueado.',
      duration: 2000
    });
    toast.present();
  }
}
