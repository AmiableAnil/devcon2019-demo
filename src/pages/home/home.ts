import { PerioddetailsPage } from './../perioddetails/perioddetails';
import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public zone: NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  goToPeriodDetailPage(){
    this.navCtrl.push(PerioddetailsPage);
  }
  alert() {
    this.zone.run(() => {
      console.log('asasasasa' + (<any>window).geniecanvas);
      const request: any = {};
      request.streaming = true;
      const content ='{"contentAccess":[{"contentLearnerState":{},"status":1}],"contentData":{"appIcon":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/0288d78758c4463dd40892d5a460edf4_1478578597914.thumb.jpeg","artifactUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/do_21264270761184460811673/artifact/1543303326995_do_21264270761184460811673.zip","attributions":["DIKSHA"],"audience":["Learner"],"board":"State (Tamil Nadu)","channel":"in.ekstep","contentDisposition":"inline","contentEncoding":"gzip","contentType":"Resource","createdBy":"b9a3972c-a2ba-46fa-9279-59ce21957a83","createdOn":"2018-11-27T06:14:29.024+0000","creator":"DemoCreator Creator","description":"Grade 4 Math Activity","downloadUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328064_do_21264270761184460811673_2.0.ecar","framework":"NCF","gradeLevel":["Class 4"],"identifier":"do_21264270761184460811673","language":["English"],"lastPublishedOn":"2018-11-27T07:22:07.149+0000","medium":"English","mimeType":"application/vnd.ekstep.ecml-archive","name":"Mathematics Activity - Class 4","osId":"org.ekstep.quiz.app","owner":"DemoCreator Creator","pkgVersion":"2.0","previewUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","resourceType":"Test","size":"562094.0","status":"Live","streamingUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/content/ecml/do_21264270761184460811673-latest","subject":"Mathematics","variants":{"spine":{"ecarUrl":"https://ntpstagingall.blob.core.windows.net/ntp-content-staging/ecar_files/do_21264270761184460811673/mathematics-activity-class-4_1543303328175_do_21264270761184460811673_2.0_spine.ecar","size":12590}},"versionKey":"1543303326455","downloadable":false,"contentAccess":[{"contentLearnerState":{},"status":1}],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}]},"contentFeedback":[],"contentMarker":[{"contentId":"do_21264270761184460811673","extraInfoMap":{"hierarchyInfo":[]},"marker":1,"uid":"89bafcca-e2a4-4494-bc2c-1d179ef0ab03"}],"contentType":"resource","identifier":"do_21264270761184460811673","isAvailableLocally":false,"isUpdateAvailable":false,"lastUpdatedTime":0,"mimeType":"application/vnd.ekstep.ecml-archive","referenceCount":1}';
      (<any>window).geniecanvas.play(content, JSON.stringify(request));
    });
  }
}
