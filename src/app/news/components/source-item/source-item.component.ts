import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatListItem} from "@angular/material/list";

@Component({
  selector: 'app-source-item',
  standalone: true,
  imports: [
    MatListItem
  ],
  templateUrl: './source-item.component.html',
  styleUrl: './source-item.component.css'
})
export class SourceItemComponent {
  @Input() source!: Source;
  @Output() sourceSelected = new EventEmitter();

  onClick(){
    this.sourceSelected.emit(this.source);
  }

}
