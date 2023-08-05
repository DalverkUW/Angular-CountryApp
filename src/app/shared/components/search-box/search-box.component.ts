import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @Input()
  placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string){
    this.onValue.emit(value)
  }

}
