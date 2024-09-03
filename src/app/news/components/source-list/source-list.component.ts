import {Component, EventEmitter, Input,Output} from '@angular/core';
import {Source} from "../../model/source.entity"
import {MatNavList} from "@angular/material/list";

@Component({
  selector: 'app-source-list',
  standalone: true,
  templateUrl: './source-list.component.html',
  styleUrl: './source-list.component.css'
})
export class SourceListComponent {
  @Input() sources!: Array<Source>;
  @Output() sourceSelected = new EventEmitter();

  onSourceSelected(source: Source) {
    this.sourceSelected.emit(source);
  };

}
