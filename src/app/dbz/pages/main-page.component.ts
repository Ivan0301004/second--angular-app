import { Component, inject } from '@angular/core';
import { AddCharacterComponent } from '../components/add-character/add-character.component';
import { ListComponent } from '../components/list/list.component';
import { DbzCharacter } from '../interfaces/dbz-character.interface';
import { DbzService } from '../services/dbz.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  styleUrl: 'main-page.component.css',
  standalone: true,
  imports: [ListComponent, AddCharacterComponent, ListComponent],
})
export class MainPageDbzComponent {
  private dbzService = inject(DbzService);

  get characters(): DbzCharacter[] {
    return this.dbzService.characters;
  }

  get charactersSize(): number {
    return this.characters.length;
  }

  saveCharacter(dbzCharacter: DbzCharacter): void {
    dbzCharacter.id = uuid();
    this.dbzService.saveCharacter(dbzCharacter);
  }

  onDeleteCharacter(id: string | undefined): void {
    this.dbzService.deleteCharacterById(id);
  }
}
