import { TestBed } from '@angular/core/testing';

import { ParseInputService } from './parse-input.service';

describe('ParseInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseInputService = TestBed.get(ParseInputService);
    expect(service).toBeTruthy();
  });
});
