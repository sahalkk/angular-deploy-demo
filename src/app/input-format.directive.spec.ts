import { ElementRef } from '@angular/core';
import { InputFormatDirective } from './input-format.directive';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = {
      nativeElement: {}
    }
    const directive = new InputFormatDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
