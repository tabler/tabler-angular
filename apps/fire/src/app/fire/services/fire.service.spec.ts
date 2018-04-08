import { TestBed, inject } from '@angular/core/testing';

import { FireService } from './fire.service';

describe('FireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireService]
    });
  });

  it('should be created', inject([FireService], (service: FireService) => {
    expect(service).toBeTruthy();
  }));
});
