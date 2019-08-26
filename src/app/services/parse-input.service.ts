import { Injectable } from '@angular/core';
import {ParseDataService} from './parse-data.service';

@Injectable({
  providedIn: 'root'
})
export class ParseInputService {

  public constructor(public readonly parseDataService:ParseDataService) { }

  public parseInput(input: string):string {

    const isFileName = this.isFileName(input);

    return isFileName ? this.getFileText(input) : input;
  }

  public isFileName(input: string): boolean {
    return input.endsWith('.txt');
  }

  public getFileText(fileName: string):string {
    return (this.parseDataService.getFileText(fileName));
  }

}
