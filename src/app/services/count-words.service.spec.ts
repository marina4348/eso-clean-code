import {TestBed} from '@angular/core/testing';

import {CountWordsService} from './count-words.service';

describe('CountWordsService', () => {

  let service: CountWordsService;
  const stopWords = ['in', 'a', 'the', 'and'];

  beforeEach(() => {
    service = TestBed.get(CountWordsService);
  });

  it('should return 4 for das ist mein Text', () => {
    const actual = 4;
    service.countInputWords('das ist mein Text', stopWords);
    service.wordCount$.subscribe(count => {
      expect(count).toBe(actual);
    });
  });

  it('should return 2 for Input,Text', () => {
    const actual = 2;
    service.countInputWords('Input,Text', stopWords);
    service.wordCount$.subscribe(count => {
      expect(count).toBe(actual);
    });
  });

  it('should return 2 for InputWörter', () => {
    const actual = 2;
    service.countInputWords('InputWörter', stopWords);
    service.wordCount$.subscribe(count => {
      expect(count).toBe(actual);
    });
  });

  it('filterWords should return array without a for [Mary, had, a, little, lamb]', () => {
    const words = ['Mary', 'had', 'a', 'little', 'lamb'];
    const expected = ['Mary', 'had', 'little', 'lamb'];
    const actual = CountWordsService.filterWords(words, stopWords);
    expect(actual).toBe(expected);
  });

  it('splitIntoWords should return [Mary, had, a, little, lamb] a for Mary had a little lamb', () => {
    const text = 'Mary had a little lamb';
    const expected = ['Mary', 'had', 'little', 'lamb'];
    const actual = CountWordsService.splitIntoWords(text);
    expect(actual).toBe(expected);
  });

  it('parseByRegex should return [Mary, had, a, little, lamb] for Mary had a little lamb', () => {
    const text = 'Mary had a little lamb';
    const expected = ['Mary', 'had', 'a', 'little', 'lamb'];
    const actual = CountWordsService.parseByRegex(text);
    expect(actual).toEqual(expected);
  });

  it('countWords should return 5 for array Mary had a little lamb', () => {
    const words = ['Mary', 'had', 'a', 'little', 'lamb'];
    const expected = 5;
    const actual = CountWordsService.countWords(words);
    expect(actual).toBe(expected);
  });

});
