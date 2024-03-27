import React from 'react';
import AppHeader from './components/common/AppHeader.jsx';
import AppFooter from './components/common/AppFooter.jsx';
import { Outlet } from 'react-router-dom';
import AppLink from './components/common/AppLink.jsx';

const App = () => (
  <>
    <AppHeader />
    <AppLink />

    <Outlet />
  </>
);

export default App;
