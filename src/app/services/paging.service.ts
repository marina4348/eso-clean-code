import {Injectable} from '@angular/core';
import {Record} from './create-records.service';
import {BehaviorSubject, Observable} from 'rxjs';

export interface AddressPageData {
  header: string;
  records: Record[]
}

const header = 'Name \tAlter \tOrt';

@Injectable({
  providedIn: 'root',
})
export class PagingService {

  private readonly pageData$$ = new BehaviorSubject<AddressPageData | undefined>(undefined);
  public readonly pageData$: Observable<AddressPageData | undefined> = this.pageData$$.asObservable();


  public extractFirstPage(records: Record[]): AddressPageData {

    const pageRecords = records.slice(0, 5);

    const pageData = {
      header: header,
      records: pageRecords,
    };

    this.pageData$$.next(pageData);

    return pageData;
  }
}
