import {Pipe, PipeTransform, Injectable} from '@angular/core';


@Pipe({
    name: "spipe"
})

export class SearchPipe implements PipeTransform {
    transform(value, term) {
        if (term == null) {
            return value;
        }
        return value.filter((item) => {
          if (item.first_name)
          return item.first_name.toUpperCase().includes(term.toUpperCase()) || item.categories.toUpperCase().includes(term.toUpperCase()) || item.enterprise.toUpperCase().includes(term.toUpperCase());
      });
    }
}
