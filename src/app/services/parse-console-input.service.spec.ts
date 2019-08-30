import { TestBed } from '@angular/core/testing';

import { ParseConsoleInputService } from './parse-console-input.service';

describe('ParseConsoleInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParseConsoleInputService = TestBed.get(ParseConsoleInputService);
    expect(service).toBeTruthy();
  });


  let sut: ParseConsoleInputService;
  beforeEach(() => {
    sut = TestBed.get(ParseConsoleInputService);
  });

  it('getArguments should extract console arguments', () => {
    const actual = ParseConsoleInputService.getArguments('address.csv start');
    const expected = ['address.csv','start'];
    expect(expected).toEqual(actual);
  });

});
