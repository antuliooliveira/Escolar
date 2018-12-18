import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNao'
})
export class SimNaoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    let result = 'Não';

    if (value === 'true') {
      result = 'Sim';
    }

    return result;
  }
}
