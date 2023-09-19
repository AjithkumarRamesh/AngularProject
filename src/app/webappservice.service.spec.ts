import { TestBed } from '@angular/core/testing';

import { WebappserviceService } from './webappservice.service';

describe('WebappserviceService', () => {
  let service: WebappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
