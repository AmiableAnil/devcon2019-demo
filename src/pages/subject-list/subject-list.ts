import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { statsHeatMap } from '../../data/data';
import { PerioddetailsPage } from '../../pages/perioddetails/perioddetails'

/**
 * Generated class for the SubjectListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject-list',
  templateUrl: 'subject-list.html',
})
export class SubjectListPage {

  childrenData: any;
  depth = '1';
  child = [];
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.navParams.get('data');
  }

  ionViewWillEnter() {
    this.data = this.navParams.get('data');
    this.childrenData = statsHeatMap;
    this.setChildData();
  }
  setChildData() {
    if (this.data) {
      this.childrenData = this.data;
    }
  }

  navigateToDetailsPage(item) {
    this.child = item.child;
    if (this.child) {
      this.navCtrl.push(SubjectListPage, {
        data: this.child
      })
    } else {
      this.navCtrl.push(PerioddetailsPage, {
      });
    }
  }

}
