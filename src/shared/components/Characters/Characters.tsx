import React from 'react';

import { CharacterCard } from './CharacterCard';
import styles from './Characters.module.scss';
import { CharactersViewModel } from './Characters.vm';

export const Characters: React.FC = (): any => {
  const { store } = CharactersViewModel();

  return (
    <div className={styles.cardWrapper}>
      {store
        ? store.map((data: { id: number; name: string; image: string; origin: { name: string } }): any => (
            <CharacterCard key={data.id} id={data.id} name={data.name} image={data.image} origin={data.origin} />
          ))
        : null}
    </div>
  );
};
