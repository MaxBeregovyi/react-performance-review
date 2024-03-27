import React from 'react';
import AppHeader from './components/common/AppHeader.jsx';
import AppFooter from './components/common/AppFooter.jsx';
import { Outlet } from 'react-router-dom';

const App = () => (
  <>
    <AppHeader />

    <Outlet />
  </>
);

export default App;
