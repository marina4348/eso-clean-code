import {Injectable} from '@angular/core';
import {ParseDataService} from './parse-data.service';

@Injectable({
  providedIn: 'root',
})
export class ParseInputService {

  public constructor(public readonly parseDataService: ParseDataService) {
  }

  public static parseCsv(text: string): string[] {
    return text.split('\n');
  }

  public parseInput(input: string): string {

    const isFileName = ParseInputService.isFileName(input);
    return isFileName ? this.getFileText(input) : input;
  }

  public static isFileName(input: string): boolean {
    return input.endsWith('.txt') || input.endsWith('.csv');
  }

  public getFileText(fileName: string): string {
    return this.parseDataService.getFileText(fileName);
  }

}
