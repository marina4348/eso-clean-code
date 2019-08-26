import {Component, OnInit} from '@angular/core';
import {CountWordsService} from '../services/count-words.service';
import {ParseDataService} from '../services/parse-data.service';
import {ParseInputService} from '../services/parse-input.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {


  public constructor(public readonly countWordsService: CountWordsService,
                     public readonly parseDataService: ParseDataService,
                     public readonly parseInputService: ParseInputService) {
  }

  public ngOnInit(): void {
  }

  public onTextInput(text: string): void {
    const stopWords = this.parseDataService.getStopWords();
    const parsedInput = this.parseInputService.parseInput(text);
    this.countWordsService.countInputWords(parsedInput, stopWords);
  }

}
