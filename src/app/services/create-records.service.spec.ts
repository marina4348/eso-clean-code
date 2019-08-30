import {TestBed} from '@angular/core/testing';

import {CreateRecordsService} from './create-records.service';

describe('CreateRecordsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateRecordsService = TestBed.get(CreateRecordsService);
    expect(service).toBeTruthy();
  });

  let sut: CreateRecordsService;

  beforeEach(() => {
    sut = TestBed.get(CreateRecordsService);
  });

  it('should create records', () => {
      const input = ['Tom \t15 \tKiel', 'Anna \t35 Hamburg', 'Tom \t15 \tKiel'];
      const actual = sut.createRecords(input);
      const expected = [{line: 'Tom \t15 \tKiel'}, {line: 'Anna \t35 Hamburg'}, {line: 'Tom \t15 \tKiel'}];

      expect(actual).toEqual(expected);
    },
  );
});
