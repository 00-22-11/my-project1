import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { About } from './shared/components/About';
import { Battlefield } from './shared/components/Battlefield';
import { Characters } from './shared/components/Characters';
import { Main } from './shared/components/Main';

export enum AppRoutes {
  MAIN = '/',
  ABOUT = '/about',
  CHARACTERS = '/characters',
  BATTLEFIELD = '/battlefield'
}

export const Router: React.FC = (): any => {
  return (
    <Routes>
      <Route path={AppRoutes.MAIN} element={<Main />} />
      <Route path={AppRoutes.ABOUT} element={<About />} />
      <Route path={AppRoutes.CHARACTERS} element={<Characters />} />
      <Route path={AppRoutes.BATTLEFIELD} element={<Battlefield />} />
    </Routes>
  );
};
