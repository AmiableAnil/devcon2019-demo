import { ReportAlertComponent } from './../../components/report-alert/report-alert';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, Events, Platform, ViewController, IonicApp } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { AttendancePage } from '../attendance/attendance';
//import { ReportAlertComponent } from '../../components/report-alert/report-alert';
//import { AskappuPage } from '../askappu/askappu';
// import { AttendenceComponent } from '../../components/attendence/attendence';
import { statsHeatMap } from '../../data/data';

/**
 * Generated class for the PerioddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-perioddetails',
  templateUrl: 'perioddetails.html',
})
export class PerioddetailsPage {
  periodResponse: any;
  data: any;
  topics = [];
  topic;
  avgEngagement: any;
  avgPerformance: any;
  avgAttendence: any;
  date: Date;
  studentSize = 5;
  studentStatistics: boolean = true;
  teacherId;
  visitorId;
  visitorName;
  topicInfo;
  showStartClass = false;
  backButtonFunc = undefined;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpClient: HttpClient, private modalCtrl: ModalController, private popoverCtrl: PopoverController,
    public events: Events,
    private platform: Platform,
    private viewCtrl: ViewController,
    private ionicApp: IonicApp) {
    // this.data = this.navParams.get('data');

    // const date = this.navParams.get('date');
    // this.teacherId = this.navParams.get('teacherid');
    // this.visitorId = this.navParams.get('visitorId');
    // this.visitorName = this.navParams.get('visitorName');
    // this.data = this.data.event.data;
    this.data = { 'period': 'PTCH1_1', 'class': 'Class 3' };

    const date = '2019-02-06-';
    this.teacherId = 'TCH1';
    this.visitorId = 'VIS1';
    this.visitorName = 'VIS1';
    console.log(this.data);
    this.showStartClass = false;
    this.events.subscribe('periodId', (res) => {
      if (res) {
        this.getTopicsArray(res);
        this.showStartClass = true;
        console.log(this.showStartClass);
        console.log(res);
      }
    });
    // this.getPeriodDetails(this.data.period, this.data.class, date, this.teacherId);
    this.handleBackButton();
  }

  getTopicsArray(periodId) {
    switch (periodId) {
      case 'PTCH1_1':
        this.topic = 'Taste,Smell';
        break;
      case 'PTCH1_2':
        this.topic = 'Taste,Smell';
        break;
      case 'PTCH2_1':
        this.topic = 'Sun,Planets,Earth';
        break;
      case 'PTCH3_1':
        this.topic = 'Types of Birds';
        break;
      case 'PTCH4_1':
        this.topic = 'Tropic of cancer';
        break;
      case 'PTCH5_1':
        this.topic = 'Inertia,Mass';
        break;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerioddetailsPage');
  }

  // onClickAttendance() {
  //   let studentModal = this.modalCtrl.create(AttendancePage);
  //   studentModal.present();
  // }

  getPeriodDetails(periodId, classId, date, teacherId) {
    const request = {
      "request": {
        "periodId": periodId,
        "classId": classId,
        "date": date,
        "id": teacherId
      }
    };
    console.log('req body', request);
    this.httpClient.post("https://dev.ekstep.in/api/dialcode/v3/period/read",
      request)
      .subscribe(data => {
        this.periodResponse = data;
        console.log('my response', this.periodResponse);
        this.date = this.periodResponse.start;
        console.log('date', this.date);
        for (var i = 0; i < this.periodResponse.topics.length; i++) {
          this.topics.push(this.periodResponse.topics[i]);
        }
        this.studentStatistics = this.periodResponse.engagementDetails.length;

        this.topic = this.topics.join(' , ');
        this.avgAttendence = this.periodResponse.attendance;
        this.avgEngagement = this.getAverage(this.periodResponse.engagementDetails);
        this.avgPerformance = this.getAverage(this.periodResponse.performanceDetails);
        if (this.periodResponse.students) {
          this.studentSize = this.periodResponse.students.length;
        }
        // this.startDate = this.periodResponse.start;
        // this.date = new Date(this.startDate);

      }, error => {
        console.log('error is', error);
        this.topic = this.topics.join(' , ');
        this.avgAttendence = 100;//this.periodResponse.attendance;
        this.avgEngagement = 85;//this.getAverage(this.periodResponse.engagementDetails);
        this.avgPerformance = 70;//this.getAverage(this.periodResponse.performanceDetails);
      });
  }

  getAverage(array): string {
    if (array) {
      let total: number = 0
      array.forEach(element => {
        total = total + Number(element.rate);
      });
      const avg = (total / array.length).toFixed(0);
      return avg;
    }
  }
  // this.http.g

  // openHeatMap() {
  //   const popover = this.popoverCtrl.create(ReportAlertComponent, {
  //   }, {
  //       cssClass: 'popover-alert'
  //     });
  //   popover.present();
  // }

  openHeatMapForEngagement() {
    const popover = this.popoverCtrl.create(ReportAlertComponent, {
      heatMapData: statsHeatMap,// this.periodResponse.engagementDetails,
      title: "Engagement Report",
      pageName: "Engagement"
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();

  }

  // showAppuPage() {
  //   this.navCtrl.push(AskappuPage, {
  //     visitorId: this.visitorId,
  //     visitorName: this.visitorName,
  //     teacherId: this.teacherId,
  //     period: this.data.period
  //   });
  // }

  openHeatMapForPerformance() {
    const popover = this.popoverCtrl.create(ReportAlertComponent, {
      heatMapData: statsHeatMap,//this.periodResponse.performanceDetails,
      title: "Performance Report",
      pageName: "Performance"
    }, {
        cssClass: 'popover-alert'
      });
    popover.present();
  }

  // openAttendenceReport() {
  //   console.log(this.visitorId)
  //   const popover = this.popoverCtrl.create(AttendenceComponent, {
  //     attendenceDeatils: statsHeatMap,//this.periodResponse.attendanceDetails,
  //     visitorId: this.visitorId,
  //     period: this.data.period,
  //     grade: this.data.class,
  //     subject: this.data.subject,
  //     teacher: this.teacherId

  //   }, {
  //       cssClass: 'popover-alert'
  //     });
  //   popover.present();
  // }

  formatDate() {

  }

  handleBackButton() {
    this.backButtonFunc = this.platform.registerBackButtonAction(() => {
      const activePortal = this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
      } else if (this.navCtrl.canGoBack()) {
        this.navCtrl.pop();
      }
      this.backButtonFunc();
    }, 10);

  }
}


