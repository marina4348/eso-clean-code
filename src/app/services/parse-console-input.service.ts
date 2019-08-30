import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ParseConsoleInputService {

  public static getArguments(input: string): string[] {
    return input.split(' ');
  }

  public static isCsvFile(input: string): boolean {
    return input.includes('.csv');
  }
}
