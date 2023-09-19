import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {
  private excludedWords = ['of', 'the','and','an','a']
  transform(value: string): string {
    if (!value)
      return '';

      const words = value.split(' ')
      let isFirstWordInSentence = true;
      const titleCasedWords = words.map(word => {
        const capitalizedWord = this.capitalizedFirstCharacter(word)
        if(isFirstWordInSentence){
          isFirstWordInSentence = false;
          return capitalizedWord;
        }

        if(this.isExcludedWord(word.toLowerCase())){
          return word.toLowerCase();
        }
        return capitalizedWord;
       });
      
      return titleCasedWords.join(' ')
  }

 
  private capitalizedFirstCharacter(word:string):string{
    if(!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  private isExcludedWord(word: string): boolean {
    return this.excludedWords.includes(word.toLowerCase());

  }
}
