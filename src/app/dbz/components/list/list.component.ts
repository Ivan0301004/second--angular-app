import { JsonPipe, NgClass, NgFor, TitleCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DbzCharacter } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [NgFor, TitleCasePipe, NgClass],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  listDbz: DbzCharacter[] = [];

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  get totalElements(): number {
    return this.listDbz.length;
  }

  onDeleteCharacter(id: string): void {
    this.onDelete.emit(id);
  }
}
