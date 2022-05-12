import React from 'react';

import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../../router';
import style from './Header.module.scss';

export const Header: React.FC = (): any => (
  <AppBar position="static">
    <Toolbar>
      <div className={style.wrapperLinks}>
        <Link to={AppRoutes.MAIN} className={style.link}>
          Main
        </Link>
        <Link to={AppRoutes.ABOUT} className={style.link}>
          About
        </Link>
        <Link to={AppRoutes.CHARACTERS} className={style.link}>
          Characters
        </Link>
        <Link to={AppRoutes.BATTLEFIELD} className={style.link}>
          Battlefield
        </Link>
      </div>
    </Toolbar>
  </AppBar>
);
