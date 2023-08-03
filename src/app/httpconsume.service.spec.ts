import { TestBed } from '@angular/core/testing';

import { HttpconsumeService } from './httpconsume.service';

describe('HttpconsumeService', () => {
  let service: HttpconsumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpconsumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
