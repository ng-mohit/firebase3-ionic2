import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {
    AuthProviders, 
    AuthMethods, 
    AngularFire, 
    FirebaseAuthState,
    FirebaseObjectObservable,
    FirebaseListObservable
} from 'angularfire2';

import {LoginPage} from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  //private rootPage: any;
  posts : FirebaseListObservable<any[]>;
  constructor(private navCtrl: NavController, public af:AngularFire) {
    this.posts = af.database.list('posts');
  }

  logout(){
    this.af.auth.logout();
    this.navCtrl.setRoot(LoginPage);
    this.af.auth.unsubscribe();
    window.location.reload();
  }
  
}
