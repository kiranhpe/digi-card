import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HtmlToImgService } from './services/html-to-img.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('screen')
  screen!: ElementRef;
  @ViewChild('canvas')
  canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;
  showPlaceholder = false;
  showColorButtons = true;
  constructor(private _imgService: HtmlToImgService) {}

  downloadImage() {
    this.showColorButtons = false;
    (document.querySelector('#color-buttons') as HTMLElement).style.display =
      'none';
    this._imgService.downloadImage(this.screen, this.downloadLink, this.canvas);
    (document.querySelector('#color-buttons') as HTMLElement).style.display =
      'grid';
    this.showColorButtons = true;
  }
}
