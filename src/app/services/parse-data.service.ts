import {Injectable} from '@angular/core';
// import {readFileSync} from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ParseDataService {

  // private readonly fileText: string[];
  // private readonly file = readFileSync('C:\\Workspace\\eso-clean-code\\src\\app\\data\\stopwords.txt', 'utf-8');
  private readonly stopWords = ['in', 'a', 'the', 'and'];
  private readonly fileName = 'fileName.txt';
  private readonly fileContent = 'Mary is a little lamb.';


  public constructor() {
    // this.fileText = this.file.split(' ');
    // console.log('filetext', this.fileText);

  }

  public getFileText(fileName: string): string {
    if (this.fileNameExists(fileName)) {
      return this.getFileContent();
    }
  }

  public fileNameExists(fileName: string): boolean {
    return this.fileName === fileName;
  }

  public getFileContent() {
    return this.fileContent;
  }

  public getStopWords(): string[] {
    return this.stopWords;
  }
}
