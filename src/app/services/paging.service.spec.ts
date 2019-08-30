import { TestBed } from '@angular/core/testing';

import {AddressPageData, PagingService} from './paging.service';
import {Record} from './create-records.service';

describe('PagingService', () => {

  let sut: PagingService;


const header = 'Name \tAlter \tOrt';

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    sut = new PagingService();
  });

  it('should be created', () => {
    const service: PagingService = TestBed.get(PagingService);
    expect(service).toBeTruthy();
  });

  it('extractFirstPage should extract first page from data', () => {
    let allRecords = [{line: 'Tom \t15 \tKiel'},{line: 'Anna \t35 Hamburg'},{line: 'Tom \t15 \tKiel'},{line: 'Anna \t35 Hamburg'},{line: 'Tom \t15 \tKiel'},{line: 'Anna \t35 Stuttgart'},{line: 'Anton \t15 \tKiel'},];
    let records = [{line: 'Tom \t15 \tKiel'},{line: 'Anna \t35 Hamburg'},{line: 'Tom \t15 \tKiel'},{line: 'Anna \t35 Hamburg'},{line: 'Tom \t15 \tKiel'}];
    const actual = sut.extractFirstPage(allRecords);
    const expected: AddressPageData = {
      header,
      records: records
    };
    expect(actual).toEqual(expected);
  });
});
