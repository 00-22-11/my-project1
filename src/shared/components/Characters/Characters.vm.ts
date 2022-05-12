import React from 'react';

import { CharactersStore } from '../../store/characters.store';

export const CharactersViewModel = () => {
  let store: any;
  const characterStore = new CharactersStore();

  React.useEffect(() => {
    (async function () {
      await characterStore.setData();
    })();
  });

  return { store };
};
