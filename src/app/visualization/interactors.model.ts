import {ParseInputService} from '../services/parse-input.service';
import {CreateRecordsService} from '../services/create-records.service';
import {PagingService} from '../services/paging.service';

export class InteractorsModel {

  public constructor(private parseInputService: ParseInputService,
                     private createRecordsService: CreateRecordsService,
                     private pagingService: PagingService
  ){}

  public start(args: string[]): void {
    const parsedInput = this.parseInputService.parseInput(args[0]);
    const parsedCsvInput = ParseInputService.parseCsv(parsedInput);
    const records = this.createRecordsService.createRecords(parsedCsvInput);
    this.pagingService.extractFirstPage(records);
  }

}
