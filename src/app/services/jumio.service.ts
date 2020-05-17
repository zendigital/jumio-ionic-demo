import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { JumioNetverifyConfig, JumioDocVerificationConfig, Jumio, NetverifyDocumentData } from '@ionic-native/jumio/ngx';

@Injectable({
  providedIn: 'root' // Singleton
})
export class JumioService {

  private static DATA_CENTER = 'US';

  private type = 'CUSTOM';
  private documentName = 'Sample Document';
  private customDocumentCode = 'LOAP';
  private enableExtraction = true;

  private enableVerification = true;
  private callbackUrl = '';
  private enableIdentityVerification = true;
  private preselectedCountry = 'USA';
  private customerInternalReference = 'customerInternalReference';
  private reportingCriteria = 'reportingCriteria';
  private userReference = 'IONIC_DEMO';
  private sendDebugInfoToJumio = true;
  private dataExtractionOnMobileOnly = false;
  private cameraPosition = 'BACK';  // FRONT or BACK
  private preselectedDocumentVariant = 'PLASTIC'; // PAPER or PLASTIC
  private documentTypes = ['IDENTITY_CARD', 'DRIVER_LICENSE']; // PASSPORT, DRIVER_LICENSE, IDENTITY_CARD, VISA

  constructor(private jumio: Jumio) {}

  private getDefaultsForNetverify(): JumioNetverifyConfig {
    return new JumioNetverifyConfig({
      enableVerification: this.enableVerification,
      callbackUrl: this.callbackUrl,
      enableIdentityVerification: this.enableIdentityVerification,
      preselectedCountry: this.preselectedCountry,
      customerInternalReference: this.customerInternalReference,
      reportingCriteria: this.reportingCriteria,
      userReference: this.userReference,
      sendDebugInfoToJumio: this.sendDebugInfoToJumio,
      dataExtractionOnMobileOnly: this.dataExtractionOnMobileOnly,
      cameraPosition: this.cameraPosition,
      preselectedDocumentVariant: this.preselectedDocumentVariant,
      documentTypes: this.documentTypes
    });
  }

  private getDefaultsForDocVerification(): JumioDocVerificationConfig {
    return new JumioDocVerificationConfig({
      callbackUrl: this.callbackUrl,
      type: this.type,
      userReference: this.userReference,
      country: this.preselectedCountry,
      customerInternalReference: this.customerInternalReference,
      reportingCriteria: this.reportingCriteria,
      documentName: this.documentName,
      cameraPosition: this.cameraPosition,
      customDocumentCode: this.customDocumentCode,
      enableExtraction: this.enableExtraction
    });
  }

  public async initNetverify() {
    const configuration: JumioNetverifyConfig = this.getDefaultsForNetverify();
    this.jumio.initNetverify(environment.token, environment.secret, JumioService.DATA_CENTER, configuration);
  }

  public async startNetverify() {
    console.log('Ready');
    try {
      const documentData: NetverifyDocumentData = await this.jumio.startNetverify();
      console.log('Netverify success callback: ', documentData);
      alert('Netverify success callback: ' + JSON.stringify(documentData));
    } catch (error) {
      console.error('Netverify error callback: ', error);
      alert('Netverify error callback: ' + JSON.stringify(error));
    }
  }

  public async initDocumentVerification() {
    const configuration: JumioDocVerificationConfig = this.getDefaultsForDocVerification();
    this.jumio.initDocumentVerification(environment.token, environment.secret, JumioService.DATA_CENTER, configuration);
  }

  public async startDocumentVerification() {
    try {
      const documentData = await this.jumio.startDocumentVerification();
      console.log('Document verification success callback: ', documentData);
      alert('Document verification success callback: ' + JSON.stringify(documentData));
    } catch (error) {
      console.error('Document verification error callback: ', error);
      alert('Document verification error callback: ' + JSON.stringify(error));
    }
  }

}
