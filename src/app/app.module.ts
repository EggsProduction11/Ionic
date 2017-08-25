import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LocationSelectPage } from '../pages/location-select/location-select';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation';
import { ListPage } from '../pages/list/list';



@NgModule({
  declarations: [
    MyApp,
    LocationSelectPage,
    ListPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListPage,
    LocationSelectPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectivityServiceProvider,
    GoogleMapsProvider
  ]
})
export class AppModule {}
