import { ElementRef, Injectable, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root',
})
export class HtmlToImgService {
  constructor() {}

  downloadImage(
    source: ElementRef,
    downloadLink: ElementRef,
    canvas: ElementRef,
  ) {
    html2canvas(source.nativeElement).then((canvasRes) => {
      canvas.nativeElement.src = canvasRes.toDataURL();
      downloadLink.nativeElement.href = canvasRes.toDataURL('image/png');
      downloadLink.nativeElement.download = this.uuidv4()+'.jpg';
      downloadLink.nativeElement.click();
    });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
