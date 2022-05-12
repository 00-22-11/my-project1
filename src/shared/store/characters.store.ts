import { action, makeObservable, observable } from 'mobx';

import { getCharacters } from '../api/api';
import { RMCardType } from '../types/RMCardType';

export class CharactersStore {
  characters: any = [];

  componentDidMount() {
    this.setData();
  }

  constructor() {
    makeObservable(this, {
      characters: observable,

      addChar: action,
      removeChar: action,
      setData: action
    });
  }

  setData = async () => {
    const characters = await getCharacters();
    this.characters = characters;
  };

  addChar = (char: RMCardType) => {
    // this.characters.push(char);
  };

  removeChar = (id: number) => {
    // this.characters.filter(charId => charId.id !== id);
  };
}
