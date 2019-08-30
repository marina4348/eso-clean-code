import {Component} from '@angular/core';
import {CountWordsService} from '../services/count-words.service';
import {ParseDataService} from '../services/parse-data.service';
import {ParseInputService} from '../services/parse-input.service';
import {ParseConsoleInputService} from '../services/parse-console-input.service';
import {CreateRecordsService} from '../services/create-records.service';
import {PagingService} from '../services/paging.service';
import {InteractorsModel} from './interactors.model';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent {


  public constructor(public readonly countWordsService: CountWordsService,
                     public readonly parseDataService: ParseDataService,
                     public readonly parseInputService: ParseInputService,
                     private readonly parseConsoleInputService: ParseConsoleInputService,
                     private readonly createRecordsService: CreateRecordsService,
                     private readonly pagingService: PagingService) {
  }

  public onTextInput(text: string): void {
    const stopWords = this.parseDataService.getStopWords();

    const parsedConsole = ParseConsoleInputService.getArguments(text);
    console.log('parsedConsole', parsedConsole);

    if (ParseConsoleInputService.isCsvFile(text)) {
      // csv page code
      const interactors = new InteractorsModel(this.parseInputService, this.createRecordsService, this.pagingService);
      interactors.start(parsedConsole);

      // TODO: weitere Interaktionen implementieren und code refactorn

    } else {
      // count words
      const parsedInput = this.parseInputService.parseInput(text);
      this.countWordsService.countInputWords(parsedInput, stopWords);
    }

  }

}
