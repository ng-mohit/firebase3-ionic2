import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProviders, AuthMethods, AngularFire } from 'angularfire2';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, public af:AngularFire) {}

login(){
    console.log("Inside");
    this.af.auth.login({ email: 'mohit@gmail.com', password:'rugkule'});
  }

  googleLogin(){
    console.log("Inside google login");
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    })
  }
}
