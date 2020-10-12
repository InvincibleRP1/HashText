import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HashText';
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;

  constructor() {
    this.encryptMode = true;
  }

  changeMode() {
    this.textToConvert = "";
    this.password = "";

  }

  convertText() {
    if (this.textToConvert.trim() === "" || this.password.trim() === "") {
      this.conversionOutput = "BOTH TEXTBOXES MUST BE FILLED!"
      return;
    }
    else {
      if (this.encryptMode) {
        this.conversionOutput = CryptoJS.AES.encrypt(this.textToConvert.trim(), this.password.trim()).toString();
      }
      // else {
      //   this.conversionOutput = CryptoJS.AES.decrypt(this.textToConvert.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
      // }
    }
  }
}


