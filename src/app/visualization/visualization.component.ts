import {Component, OnInit} from '@angular/core';
import {CountWordsService} from '../services/count-words.service';
import {ParseDataService} from '../services/parse-data.service';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css'],
})
export class VisualizationComponent implements OnInit {


  public constructor(public readonly countWordsService: CountWordsService,
                     public readonly parseDataService: ParseDataService) {
  }

  public ngOnInit(): void {
  }

  public onTextInput(text: string): void {
    const stopWords = this.parseDataService.getStopWords();
    this.countWordsService.countInputWords(text, stopWords);
  }

}
