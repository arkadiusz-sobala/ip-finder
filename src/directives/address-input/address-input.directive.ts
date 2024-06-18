import { Directive, HostListener } from '@angular/core';

const disallowedCharacters = /[ `!@#$%^&*()_+=\[\]{};'"\\\/|,<>~]/;
const disallowedPhrases = ['http://', 'https://'];

@Directive({
  selector: '[addressInput]',
})
export class AddressInputDirective {
  @HostListener('window:keydown', ['$event']) onKeydown(
    event: KeyboardEvent
  ): void {
    if (disallowedCharacters.test(event.key)) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event']) onInput(event: any): void {
    const disallowedPhrase = disallowedPhrases.find((phrase) =>
      event.target.value.includes(phrase)
    );
    if (!disallowedPhrase) {
      return;
    }
    event.target.value = event.target.value.replace(disallowedPhrase, '');
  }
  constructor() {}
}
