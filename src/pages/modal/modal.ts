import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from	 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController,private modalCtrl: ModalController) {
  }

  ionViewWillLoad() {
    let data = this.navParams.get('data');
    console.log(data);
  }//this is built-in lifetime cycle function from Ionic

  closeModal(){
    let data = {
      name : "John K",
      job : "Software engineer"
    }// this is custom function

    this.viewCtrl.dismiss(data,{},{animate:true, animation: 'wp-transition' });
   
  }

}
