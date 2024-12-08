import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'PasswordGenerator';
  pwdlength: number = 0;
  includeletters: boolean = false;
  includenumbers: boolean = false;
  includesymbols: boolean = false;
  password = '';
  /* enterLength(value: any) {
    const temp = parseInt(value);
    if (!isNaN(temp)) {
      this.pwdlength = temp;
    }
    console.log(temp);
    //console.log(this.pwdlength);
  }*/
  letters() {
    this.includeletters = !this.includeletters;
  }
  numbers() {
    this.includenumbers = !this.includenumbers;
  }
  symbols() {
    this.includesymbols = !this.includesymbols;
    //console.log(this.includesymbols);
  }
  enterLength(event: Event) {
    const temp = (event.target as HTMLInputElement).value;
    const newTemp = parseInt(temp);
    if (!isNaN(newTemp)) {
      this.pwdlength = newTemp;
    }
  }
  generate() {
    const l = 'abcdefghijklmnopqrstuvwxyz';
    const n = '1234567890';
    const s = '!@#$%^&*(){}:?><""';
    let validchars = '';
    if (this.includeletters) {
      validchars += l;
    }
    if (this.includenumbers) {
      validchars += n;
    }
    if (this.includesymbols) {
      validchars += s;
    }
    console.log(this.pwdlength);
    let generatedpwd = '';
    for (let i = 0; i < this.pwdlength; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedpwd += validchars[index];
    }
    this.password = generatedpwd;
  }
}
