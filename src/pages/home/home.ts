import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, ModalController,  ModalOptions } from 'ionic-angular';
import {FirstPage} from '../first/first';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController) {

  }
/*
----------- app is now here
----------- app starts here
 */
  openFirstPage(){
  	this.navCtrl.push(FirstPage);//this is responsible for the stack of your app.
  }
  	/*
  	Tut 9
  	 */
  // signIn(){

  // 	//console.log(this.uname.value, this.password.value);
  // 	if(this.uname.value == "admin" && this.password.value == "123") {

	 //    const alert = this.alertCtrl.create({
	 //      title: 'New Friend!',
	 //      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
	 //      buttons: ['OK']
	 //    });
	 //    alert.present();

  // 	}

  // }
  	/*
  	End of Tut 9
  	 */
  	
  	signIn(){
  		this.navCtrl.push(LoginPage);
  	}

  	register(){
  		this.navCtrl.push(RegisterPage);
  	}

    openModal(){
		let myData= {
			name: "Paul Hadley",
			job: "developer"
		};// this is object

		let myModalOptions: ModalOptions = { 
			enableBackdropDismiss: false,
			showBackdrop: true
		};

	  	let myModal  = this.modalCtrl.create(ModalPage, {data: myData}, myModalOptions);// returned type of this function is Modal...
		
		myModal.present();

		myModal.onWillDismiss((data: any) =>{
			console.log("I will dismiss...")
			console.log(data);
		})

		myModal.onDidDismiss((data) =>{
			console.log("I have dismissed...")
			console.log(data);
		})
	  
    }
}
