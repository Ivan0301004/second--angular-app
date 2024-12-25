import { Injectable } from '@angular/core';
import { DbzCharacter } from '../interfaces/dbz-character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  characters: DbzCharacter[] = [
    {
      id: uuid(),
      name: 'kirllin',
      power: 1_000,
    },
    {
      id: uuid(),
      name: 'goku',
      power: 10_000,
    },
    {
      id: uuid(),
      name: 'veguetta',
      power: 9_000,
    },
    {
      id: uuid(),
      name: 'pikolo',
      power: 9_000,
    },
  ];

  saveCharacter(dbzCharacter: DbzCharacter): void {
    this.characters.push(dbzCharacter);
  }

  deleteCharacterById(id: string | undefined): void {
    this.characters = this.characters.filter((chracter) => chracter.id !== id);
  }
}
