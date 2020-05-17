import { Component } from '@angular/core';
import { JumioService } from '../services/jumio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public jumioService: JumioService) {}

  async invokeNetverify() {
    console.log('invoke NetVerify');
    await this.jumioService.initNetverify();
    await this.jumioService.startNetverify();
  }

  async invokeDocumentVerification() {
    console.log('invoke Document Verification');
    await this.jumioService.initDocumentVerification();
    await this.jumioService.startDocumentVerification();
  }

}
