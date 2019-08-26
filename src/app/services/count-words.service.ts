import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountWordsService {

  private wordCount$$ = new BehaviorSubject<number>(0);
  public wordCount$: Observable<number> = this.wordCount$$.asObservable();

  public constructor() {
  }

  public countInputWords(input: string, stopWords: string[]): void {
    if (input === '') {
      this.wordCount$$.next(0);
    }

    const splitWords = CountWordsService.splitIntoWords(input);
    const filteredWords = CountWordsService.filterWords(splitWords, stopWords);
    const wordCount = CountWordsService.countWords(filteredWords);
    this.wordCount$$.next(wordCount);
  }



  public static filterWords(words: string[], stopWords: string[]): string[] {
    return words.filter(word => !stopWords.includes(word));
  }

  public static splitIntoWords(input: string): string[] {
    return CountWordsService.parseByRegex(input);
  }

  public static parseByRegex(text: string): string[] {
    const regex = /[a-zA-Z]+/g;
    return text.match(regex);
  }

  public static countWords(words: string[]): number {
    return words.length;
  }
}
