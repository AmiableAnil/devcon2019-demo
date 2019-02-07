import { SubjectListPage } from './../pages/subject-list/subject-list';
import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = SubjectListPage;

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // (<any>window).splashscreen.hide();
    });
}

}
