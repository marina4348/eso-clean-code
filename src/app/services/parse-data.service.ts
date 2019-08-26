import {Injectable} from '@angular/core';
// import {readFileSync} from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ParseDataService {

  // private readonly fileText: string[];
  // private readonly file = readFileSync('C:\\Workspace\\eso-clean-code\\src\\app\\data\\stopwords.txt', 'utf-8');
  private readonly stopWords = ['in', 'a', 'the', 'and'];


  public constructor() {
    // this.fileText = this.file.split(' ');
    // console.log('filetext', this.fileText);

  }



  public getStopWords(): string[] {
    return this.stopWords;
  }
}
