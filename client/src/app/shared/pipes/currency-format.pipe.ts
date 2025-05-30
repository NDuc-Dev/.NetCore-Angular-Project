import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number | undefined, currencyCode: string = 'VND'): string {
    if (value == null || isNaN(value) || value == undefined) {
      return '';
    }

    const formattedValue = new Intl.NumberFormat('vi-VN', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);

    return `${formattedValue} ${currencyCode}`;
  }

}
