import {Injectable} from '@angular/core';

// import {readFileSync} from 'fs';



@Injectable({
  providedIn: 'root',
})
export class ParseDataService {

  private readonly stopWords = ['in', 'a', 'the', 'and'];
  private readonly addresses = 'Tom  \t15 \tKiel \nAnna \t5 \tHamburg \nPaul \t45 \tNürnberg \nMartin \t35 \tFrankfurt\nElke	\t25 \tStuttgart \nPatrick	\t36 \tKiel\nAnton \t16 \tHamburg \nJulia \t86 \tNürnberg \nHeidi \t76 \tFrankfurt \nChris \t6 \tStuttgart \nBen \t18 \tKiel \nBen \t38	\tHamburg \nBen \t18 \tNürnberg \nBen \t18	\tFrankfurt \nBen \t48 \tStuttgart';
  private readonly fileName = 'fileName.txt';
  private readonly csvFileName = 'address.csv';
  private readonly fileContent = 'Mary is a little lamb.';

  private readonly reader = new FileReader();

  public constructor() {
  }

  public getFileText(fileName: string): string {

    if (this.fileNameExists(fileName)) {

      if(this.isCsvFile(fileName)) {
        return this.getAddressContent();
      }

      return this.getFileContent();
    }
    //TODO: error case
  }

  private getAddressContent():string {
    return this.addresses;
  }

  public fileNameExists(fileName: string): boolean {
    if (fileName.endsWith('.txt')) {
      return this.fileName === fileName;
    } else if (this.isCsvFile(fileName)) {
      return this.csvFileName === fileName;
    }
    return false;
  }

  public isCsvFile(fileName: string) {
    return fileName.endsWith('.csv');
  }

  public getFileContent() {
    return this.fileContent;
  }

  public getStopWords(): string[] {
    return this.stopWords;
  }
}
