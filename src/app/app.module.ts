import { ReportAlertComponent } from './../components/report-alert/report-alert';
import { SubjectListPage } from './../pages/subject-list/subject-list';
import { PerioddetailsPage } from './../pages/perioddetails/perioddetails';
import { ReportPage } from './../pages/report/report';
import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Events, IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage ,
    ReportPage,
 PerioddetailsPage,
 SubjectListPage,
 ReportAlertComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp, HomePage , ReportPage , PerioddetailsPage , SubjectListPage, ReportAlertComponent
  ],
  providers: [
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpClient , HttpClientModule
  ],
  exports: [
  ]
})
export class AppModule {

  constructor(
    private events: Events) {
    }
}
