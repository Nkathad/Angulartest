import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'productfilter'
})

export class ProductfilterPipe implements PipeTransform {
  transform(productfilters: any, term: any): any {
    if(term === undefined) return productfilters;
    return productfilters.filter(function(productfilter){
      return productfilter.title.toLowerCase().includes(term.toLowerCase());
      })
    }
}
