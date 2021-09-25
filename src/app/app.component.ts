import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { HtmlToImgService } from './services/html-to-img.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('screen')
  screen!: ElementRef;
  @ViewChild('canvas')
  canvas!: ElementRef;
  @ViewChild('downloadLink')
  downloadLink!: ElementRef;

  constructor(private _imgService: HtmlToImgService) {}

  downloadImage() {
    this._imgService.downloadImage(this.screen, this.downloadLink, this.canvas);
  }

  
 
}