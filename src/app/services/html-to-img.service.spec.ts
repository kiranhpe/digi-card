import { TestBed } from '@angular/core/testing';

import { HtmlToImgService } from './html-to-img.service';

describe('HtmlToImgService', () => {
  let service: HtmlToImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlToImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
