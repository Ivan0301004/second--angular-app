import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbzCharacter } from '../../interfaces/dbz-character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-dbz-character',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<DbzCharacter> = new EventEmitter();

  character: DbzCharacter = {
    id:'',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    this.onNewCharacter.emit(this.character);
    console.log(this.character);
    this.character = { id: '', name: '', power: 0 };
  }
}
