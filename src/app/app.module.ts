import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { PopoverComponent } from '../components/popover/popover';
// import { ModalNotificaComponent } from '../components/modal-notifica/modal-notifica';

@NgModule({
  declarations: [
    MyApp,
    PopoverComponent,
    // ModalNotificaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PopoverComponent,
    // ModalNotificaComponent


  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
