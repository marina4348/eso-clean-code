import {Injectable} from '@angular/core';

export interface Record {
  line: string;
}

@Injectable({
  providedIn: 'root',
})
export class CreateRecordsService {

  public createRecords(input: string[]): Record[] {

    const records: Record[] = input.map((item: string) => CreateRecordsService.createRecord(item));

    return records;
  }

  private static createRecord(data: string): Record {
    return {
      line: data,
    };
  }

}
