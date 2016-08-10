import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {LoginPage} from './pages/login/login';
import {
    defaultFirebase,
    FIREBASE_PROVIDERS,
    AngularFire,
    AuthMethods, 
     AuthProviders, 
    firebaseAuthConfig
} from 'angularfire2';

const Firebase_config = {
    apiKey: "AIzaSyCcXAHSwwqXsDnj4lXZQ5V_JUFayvUDLPY",
    authDomain: "yagrocery.firebaseapp.com",
    databaseURL: "https://yagrocery.firebaseio.com",
    storageBucket: "yagrocery.appspot.com",
  }

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers: [FIREBASE_PROVIDERS,
        defaultFirebase(Firebase_config),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })]
})
export class MyApp {

  private rootPage: any ;

  constructor(private platform: Platform, public af:AngularFire) {
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // to check if user is logged in or not
      this.af.auth.subscribe(auth => {
        console.log(auth);
        if(auth){
          this.rootPage = TabsPage;
        }else{
          this.rootPage = LoginPage;
        }
      });
    });
  }
}

ionicBootstrap(MyApp);
