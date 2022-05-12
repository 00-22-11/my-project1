import React from 'react';

import { Router } from './router';
import { Layout } from './shared/layout/layout';

export const App: React.FC = (): any => (
  <Layout>
    <Router />
  </Layout>
);
